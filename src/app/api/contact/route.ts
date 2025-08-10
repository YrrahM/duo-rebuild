import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: 'harry@businessenglish.vip',
      pass: process.env.ZOHO_APP_PASSWORD, // ✅ From .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: 'harry@businessenglish.vip',
      to: 'harry@businessenglish.vip', // ✅ You receive it
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { success: false, error: 'No se pudo enviar el mensaje.' },
      { status: 500 }
    );
  }
}
