import { NextResponse } from "next/server";

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

    // Send email via Formspree (replace with your Formspree form ID)
    // To activate: create a free form at https://formspree.io and replace the ID below
    const FORMSPREE_ID = process.env.FORMSPREE_ID;

    if (!FORMSPREE_ID) {
      // Fallback: log to console if Formspree is not configured
      console.log("New contact form submission:", {
        nom,
        cognom,
        email,
        empresa,
        telefon,
        missatge,
        acceptComms,
        date: new Date().toISOString(),
      });
      return NextResponse.json({ success: true });
    }

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${nom} ${cognom || ""}`.trim(),
        email,
        company: empresa,
        phone: telefon,
        message: missatge,
        acceptsComms: acceptComms ? "Sí" : "No",
        _subject: `Nova consulta web de ${nom} - ${empresa}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Error enviant el formulari");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error intern del servidor. Torna-ho a intentar." },
      { status: 500 }
    );
  }
}
