import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_HOST || 'smtp.zoho.com',
    port: Number(process.env.ZOHO_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; padding: 1rem; color: #333;">
      <div style="text-align: center; margin-bottom: 1rem;">
        <img src="https://businessenglish.vip/logo.png" alt="Business English Logo" style="max-width: 200px;" />
      </div>

      <h2 style="color: #2563eb;">📬 Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Mensaje:</strong></p>
      <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 8px;">
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>

      <hr style="margin-top: 2rem;" />
      <p style="font-size: 0.9rem; color: #888; text-align: center;">
        Este mensaje fue enviado desde el formulario de contacto en 
        <a href="https://businessenglish.vip" style="color: #2563eb;">businessenglish.vip</a>
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Business English VIP" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
      html: htmlMessage,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error('Error sending email:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
