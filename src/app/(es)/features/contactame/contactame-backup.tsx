


import Link from 'next/link';
export const metadata = {
  title: 'Contáctame | Agenda tu clase personalizada de inglés',
  description: '¿Tienes dudas o quieres comenzar tus clases? Contáctame directamente y agenda tu primera sesión de inglés adaptada a tus necesidades.',
  openGraph: {
    title: 'Contáctame | Agenda tu clase personalizada de inglés',
    description: 'Comunícate conmigo para comenzar tu camino hacia la fluidez en inglés. Atención personalizada para profesionales hispanohablantes.',
    url: 'https://tusitio.com/features/contactame',
    siteName: 'Inglés con Harry Ernest',
    images: [
      {
        url: 'https://tusitio.com/og/contactame.png',
        width: 1200,
        height: 630,
        alt: 'Profesor de inglés saludando en videollamada desde su laptop',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contáctame | Agenda tu clase personalizada de inglés',
    description: 'Escríbeme y empieza tus clases de inglés diseñadas para tus objetivos profesionales.',
    images: ['https://tusitio.com/og/contactame.png'],
  },
};


export default function ContactamePage() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom, #60a5fa, #ffffff, #93c5fd)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '1.7rem',
        fontFamily: 'sans-serif',
        color: '#1f2937',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
        }}
      >
        Contáctame
      </h2>

      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '500px',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {/* Nombre Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              fontWeight: '600',
              marginBottom: '0.5rem',
            }}
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </div>

        {/* Correo Electrónico Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              fontWeight: '600',
              marginBottom: '0.5rem',
            }}
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tucorreo@ejemplo.com"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </div>

        {/* Mensaje Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              fontWeight: '600',
              marginBottom: '0.5rem',
            }}
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          ></textarea>
        </div>

        {/* Enviar Button */}
        <button
  type="submit"
  style={{
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    // No JS event handlers
  }}
>
  Enviar mensaje
</button>

      </div>
<Link
  href="/features"
  style={{
    marginTop: '1.5rem',
    fontWeight: '600',
    color: '#2563eb',
    textDecoration: 'underline', // Always underlined (safe!)
  }}
>
  ← Volver a todas las características
</Link>


    </div>
  );
}
