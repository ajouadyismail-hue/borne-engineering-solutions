import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, type, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const typeLabels: Record<string, string> = {
      particulier: "Particulier (domicile)",
      entreprise: "Entreprise / Professionnel",
      copropriete: "Copropriété / Parking",
      autre: "Autre",
    };

    await resend.emails.send({
      from: "Borne Eng Solutions <onboarding@resend.dev>",
      to: "borne-eng@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e5e4; border-radius: 12px;">
          <h2 style="color: #D97757; margin-bottom: 24px;">Nouvelle demande de devis</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f0ede9;">
              <td style="padding: 10px 0; color: #78716c; font-size: 14px; width: 140px;">Nom</td>
              <td style="padding: 10px 0; color: #1c1917; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ede9;">
              <td style="padding: 10px 0; color: #78716c; font-size: 14px;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #D97757;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ede9;">
              <td style="padding: 10px 0; color: #78716c; font-size: 14px;">Téléphone</td>
              <td style="padding: 10px 0; color: #1c1917;">${phone || "Non renseigné"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ede9;">
              <td style="padding: 10px 0; color: #78716c; font-size: 14px;">Type de projet</td>
              <td style="padding: 10px 0; color: #1c1917;">${typeLabels[type] || type}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #fef4ef; border-radius: 8px; border-left: 3px solid #D97757;">
            <p style="color: #78716c; font-size: 13px; margin: 0 0 8px;">Message :</p>
            <p style="color: #1c1917; margin: 0; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #a8a29e; text-align: center;">
            Borne Engineering Solutions · Formulaire de contact
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
