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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, cognom, email, empresa, telefon, missatge, acceptComms } = body;

    // Validate required fields
    if (!nom || !email || !empresa || !telefon || !missatge) {
      return NextResponse.json(
        { error: "Falten camps obligatoris." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Correu electrònic no vàlid." },
        { status: 400 }
      );
    }

    const fullName = `${nom} ${cognom || ""}`.trim();
    const acceptsText = acceptComms ? "Sí" : "No";

    // HTML email template
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #1a3a5c; padding: 24px; text-align: center;">
          <h1 style="color: #c8a96e; margin: 0; font-size: 22px;">Nova consulta des de la web</h1>
          <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px;">geeconomics.com</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #1a3a5c; border-bottom: 1px solid #f0f0f0; width: 140px;">Nom complet</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #f0f0f0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #1a3a5c; border-bottom: 1px solid #f0f0f0;">Correu</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #1a3a5c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #1a3a5c; border-bottom: 1px solid #f0f0f0;">Empresa</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #f0f0f0;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #1a3a5c; border-bottom: 1px solid #f0f0f0;">Telèfon</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${telefon}" style="color: #1a3a5c;">${telefon}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #1a3a5c; border-bottom: 1px solid #f0f0f0;">Accepta comunicacions</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #f0f0f0;">${acceptsText}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8f6f3; border-radius: 6px;">
            <p style="font-weight: bold; color: #1a3a5c; margin: 0 0 8px;">Missatge:</p>
            <p style="margin: 0; color: #333; white-space: pre-wrap;">${missatge}</p>
          </div>
        </div>
        <div style="background-color: #f0f0f0; padding: 16px; text-align: center; font-size: 12px; color: #888;">
          Enviat des del formulari de contacte de geeconomics.com
        </div>
      </div>
    `;

    // Send email via IONOS SMTP
    await transporter.sendMail({
      from: `"GEE Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to same address
      replyTo: `"${fullName}" <${email}>`,
      subject: `Nova consulta web: ${fullName} - ${empresa}`,
      html: htmlBody,
      text: `Nova consulta des de la web\n\nNom: ${fullName}\nCorreu: ${email}\nEmpresa: ${empresa}\nTelèfon: ${telefon}\nAccepta comunicacions: ${acceptsText}\n\nMissatge:\n${missatge}`,
    });

    // Send confirmation email to the client
    await transporter.sendMail({
      from: `"Gabinet Estudis Econòmics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Hem rebut la teva consulta - Gabinet Estudis Econòmics",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1a3a5c; padding: 24px; text-align: center;">
            <h1 style="color: #c8a96e; margin: 0; font-size: 22px;">Gabinet d'Estudis Econòmics</h1>
          </div>
          <div style="padding: 24px;">
            <p style="color: #333;">Benvolgut/da <strong>${fullName}</strong>,</p>
            <p style="color: #333;">Gràcies per posar-te en contacte amb nosaltres. Hem rebut la teva consulta i et respondrem el més aviat possible.</p>
            <p style="color: #333;">Si tens alguna urgència, pots contactar-nos directament al telèfon <strong>932 11 97 44</strong>.</p>
            <br/>
            <p style="color: #333;">Cordialment,</p>
            <p style="color: #1a3a5c; font-weight: bold;">Gabinet d'Estudis Econòmics (GLLG)</p>
            <p style="color: #888; font-size: 13px;">Passatge de Forasté, 4, Bis, Local 7 · 08022 Barcelona</p>
          </div>
          <div style="background-color: #f0f0f0; padding: 16px; text-align: center; font-size: 12px; color: #888;">
            Aquest és un missatge automàtic. Si us plau, no responguis a aquest correu.
          </div>
        </div>
      `,
      text: `Benvolgut/da ${fullName},\n\nGràcies per posar-te en contacte amb nosaltres. Hem rebut la teva consulta i et respondrem el més aviat possible.\n\nSi tens alguna urgència, pots contactar-nos directament al telèfon 932 11 97 44.\n\nCordialment,\nGabinet d'Estudis Econòmics (GLLG)\nPassatge de Forasté, 4, Bis, Local 7 · 08022 Barcelona`,
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
