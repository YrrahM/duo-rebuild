// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Tu Sitio',
  description: 'Descripción del sitio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
