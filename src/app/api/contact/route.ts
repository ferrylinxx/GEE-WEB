import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.es",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 3600000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// HTML escape to prevent injection in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Verify reCAPTCHA v3 token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // Skip if not configured

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    // In development, log but don't block on hostname mismatch
    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data["error-codes"]);
      if (process.env.NODE_ENV === "development") return true;
      return false;
    }
    return data.score >= 0.5;
  } catch {
    // Allow in development, block in production
    return process.env.NODE_ENV === "development";
  }
}

// Format current date in Catalan
function formatDate(): string {
  const now = new Date();
  const months = [
    "gener", "febrer", "març", "abril", "maig", "juny",
    "juliol", "agost", "setembre", "octubre", "novembre", "desembre",
  ];
  return `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}, ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}h`;
}

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Has superat el límit d'enviaments. Torna-ho a intentar més tard." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nom, cognom, email, empresa, telefon, missatge, acceptComms, recaptchaToken } = body;

    // Honeypot check - if "website" field is filled, it's a bot
    if (body.website) {
      // Silently accept to not tip off the bot
      return NextResponse.json({ success: true });
    }

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        return NextResponse.json(
          { error: "Verificació anti-spam fallida." },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    if (!nom || !email || !empresa || !telefon || !missatge) {
      return NextResponse.json(
        { error: "Falten camps obligatoris." },
        { status: 400 }
      );
    }

    // Field length validation
    if (nom.length > 100 || (cognom && cognom.length > 100) || email.length > 150 ||
        empresa.length > 150 || telefon.length > 20 || missatge.length > 5000) {
      return NextResponse.json(
        { error: "Un o més camps superen la longitud màxima." },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { error: "Correu electrònic no vàlid." },
        { status: 400 }
      );
    }

    // Phone validation
    if (!/^[\d\s\+\-\(\)]{6,20}$/.test(telefon)) {
      return NextResponse.json(
        { error: "Número de telèfon no vàlid." },
        { status: 400 }
      );
    }

    // Escape all user inputs for HTML email
    const safeNom = escapeHtml(nom);
    const safeCognom = escapeHtml(cognom || "");
    const safeEmail = escapeHtml(email);
    const safeEmpresa = escapeHtml(empresa);
    const safeTelefon = escapeHtml(telefon);
    const safeMissatge = escapeHtml(missatge);
    const fullName = `${safeNom} ${safeCognom}`.trim();
    const plainFullName = `${nom} ${cognom || ""}`.trim();
    const acceptsText = acceptComms ? "Sí" : "No";
    const dateStr = formatDate();

    // ── Premium HTML email for the business ──
    const htmlBody = `
<!DOCTYPE html>
<html lang="ca">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <div style="max-width:640px;margin:0 auto;padding:24px;">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1a3a5c 0%,#0f2a44 100%);border-radius:16px 16px 0 0;padding:40px 36px 32px;text-align:center;">
      <div style="display:inline-block;margin-bottom:16px;">
        <span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:1px;">GABINET</span><br/>
        <span style="font-size:13px;font-weight:600;color:#c8a96e;letter-spacing:4px;">ESTUDIS ECON&Ograve;MICS</span>
      </div>
      <div style="width:60px;height:3px;background:linear-gradient(90deg,#c8a96e,#d4b87a);margin:20px auto 16px;border-radius:2px;"></div>
      <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:400;letter-spacing:0.5px;">Nova sol&middot;licitud de contacte</h1>
    </div>

    <!-- Body -->
    <div style="background:#ffffff;padding:36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
      <!-- Date badge -->
      <div style="display:inline-block;background:#f0ece4;color:#8a7d6b;font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px;margin-bottom:24px;letter-spacing:0.3px;">
        ${dateStr}
      </div>

      <!-- Contact info card -->
      <div style="background:#fafbfc;border:1px solid #eef0f2;border-radius:12px;padding:24px;margin-bottom:24px;">
        <div style="display:flex;margin-bottom:20px;">
          <div style="width:48px;height:48px;background:linear-gradient(135deg,#1a3a5c,#0f2a44);border-radius:12px;text-align:center;line-height:48px;color:#c8a96e;font-size:20px;font-weight:700;flex-shrink:0;">
            ${safeNom.charAt(0).toUpperCase()}
          </div>
          <div style="margin-left:16px;">
            <p style="margin:0;font-size:18px;font-weight:700;color:#1a3a5c;">${fullName}</p>
            <p style="margin:4px 0 0;font-size:14px;color:#c8a96e;font-weight:600;">${safeEmpresa}</p>
          </div>
        </div>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-top:1px solid #eef0f2;vertical-align:middle;width:32px;">
              <span style="color:#c8a96e;font-size:16px;">&#9993;</span>
            </td>
            <td style="padding:10px 0 10px 8px;border-top:1px solid #eef0f2;font-size:14px;color:#666;">
              <a href="mailto:${safeEmail}" style="color:#1a3a5c;text-decoration:none;font-weight:500;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-top:1px solid #eef0f2;vertical-align:middle;width:32px;">
              <span style="color:#c8a96e;font-size:16px;">&#9742;</span>
            </td>
            <td style="padding:10px 0 10px 8px;border-top:1px solid #eef0f2;font-size:14px;color:#666;">
              <a href="tel:${safeTelefon}" style="color:#1a3a5c;text-decoration:none;font-weight:500;">${safeTelefon}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-top:1px solid #eef0f2;vertical-align:middle;width:32px;">
              <span style="color:#c8a96e;font-size:16px;">&#9745;</span>
            </td>
            <td style="padding:10px 0 10px 8px;border-top:1px solid #eef0f2;font-size:14px;color:#666;">
              Comunicacions comercials: <strong style="color:#1a3a5c;">${acceptsText}</strong>
            </td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      <div style="margin-bottom:8px;">
        <p style="font-size:12px;font-weight:700;color:#c8a96e;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px;">Missatge</p>
        <div style="background:linear-gradient(135deg,#faf8f5 0%,#f5f1eb 100%);border-left:4px solid #c8a96e;border-radius:0 8px 8px 0;padding:20px 24px;">
          <p style="margin:0;color:#333;font-size:15px;line-height:1.7;white-space:pre-wrap;">${safeMissatge}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#1a3a5c;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
      <p style="margin:0;color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.3px;">
        Formulari de contacte &middot; geeconomics.com
      </p>
    </div>

    <!-- Reply hint -->
    <p style="text-align:center;margin:16px 0 0;font-size:12px;color:#aaa;">
      Respon directament a aquest correu per contactar amb ${fullName}
    </p>
  </div>
</body>
</html>`;

    // ── Premium HTML email for the client (confirmation) ──
    const clientHtml = `
<!DOCTYPE html>
<html lang="ca">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <div style="max-width:640px;margin:0 auto;padding:24px;">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1a3a5c 0%,#0f2a44 100%);border-radius:16px 16px 0 0;padding:40px 36px 32px;text-align:center;">
      <div style="display:inline-block;margin-bottom:16px;">
        <span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:1px;">GABINET</span><br/>
        <span style="font-size:13px;font-weight:600;color:#c8a96e;letter-spacing:4px;">ESTUDIS ECON&Ograve;MICS</span>
      </div>
      <div style="width:60px;height:3px;background:linear-gradient(90deg,#c8a96e,#d4b87a);margin:20px auto 16px;border-radius:2px;"></div>
      <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:400;">Hem rebut la teva consulta</h1>
    </div>

    <!-- Body -->
    <div style="background:#ffffff;padding:36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
      <p style="color:#333;font-size:16px;line-height:1.7;margin:0 0 16px;">
        Benvolgut/da <strong style="color:#1a3a5c;">${fullName}</strong>,
      </p>
      <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
        Gr&agrave;cies per posar-te en contacte amb nosaltres. Hem rebut la teva consulta i el nostre equip la revisar&agrave; el m&eacute;s aviat possible.
      </p>
      <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 24px;">
        Normalment responem en un termini de <strong style="color:#1a3a5c;">24-48 hores laborables</strong>.
      </p>

      <!-- Urgency card -->
      <div style="background:#fafbfc;border:1px solid #eef0f2;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#c8a96e;text-transform:uppercase;letter-spacing:1px;">Contacte directe</p>
        <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">
          Si tens alguna urg&egrave;ncia, pots contactar-nos directament:<br/>
          <span style="color:#c8a96e;">&#9742;</span> <a href="tel:+34932119744" style="color:#1a3a5c;text-decoration:none;font-weight:600;">932 11 97 44</a><br/>
          <span style="color:#c8a96e;">&#9993;</span> <a href="mailto:gllg@geeconomics.com" style="color:#1a3a5c;text-decoration:none;font-weight:600;">gllg@geeconomics.com</a>
        </p>
      </div>

      <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 4px;">Cordialment,</p>
      <p style="color:#1a3a5c;font-size:15px;font-weight:700;margin:0 0 4px;">Gabinet d'Estudis Econ&ograve;mics</p>
      <p style="color:#999;font-size:13px;margin:0;">Passatge de Forast&eacute;, 4, Bis, Local 7 &middot; 08022 Barcelona</p>
    </div>

    <!-- Footer -->
    <div style="background:#1a3a5c;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
      <p style="margin:0;color:rgba(255,255,255,0.5);font-size:11px;">
        Aquest &eacute;s un missatge autom&agrave;tic &middot; Si us plau, no responguis a aquest correu.
      </p>
    </div>
  </div>
</body>
</html>`;

    // Send email via IONOS SMTP
    await transporter.sendMail({
      from: `"Gabinet Estudis Econòmics" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: `"${plainFullName}" <${email}>`,
      subject: `Nova consulta | ${plainFullName} · ${empresa}`,
      html: htmlBody,
      text: `NOVA SOL·LICITUD DE CONTACTE\n${dateStr}\n${"─".repeat(40)}\n\nNom: ${plainFullName}\nEmpresa: ${empresa}\nCorreu: ${email}\nTelèfon: ${telefon}\nComunicacions: ${acceptsText}\n\nMissatge:\n${missatge}\n\n${"─".repeat(40)}\nFormulari de contacte · geeconomics.com`,
    });

    // Send confirmation email to the client
    await transporter.sendMail({
      from: `"Gabinet Estudis Econòmics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Hem rebut la teva consulta · Gabinet Estudis Econòmics",
      html: clientHtml,
      text: `Benvolgut/da ${plainFullName},\n\nGràcies per posar-te en contacte amb nosaltres. Hem rebut la teva consulta i et respondrem el més aviat possible.\n\nNormalment responem en un termini de 24-48 hores laborables.\n\nSi tens alguna urgència, pots contactar-nos directament:\nTelèfon: 932 11 97 44\nCorreu: gllg@geeconomics.com\n\nCordialment,\nGabinet d'Estudis Econòmics (GLLG)\nPassatge de Forasté, 4, Bis, Local 7 · 08022 Barcelona`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error intern del servidor. Torna-ho a intentar." },
      { status: 500 }
    );
  }
}
