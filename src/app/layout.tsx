import './globals.css';
import Footer from '@/components/Footer'; // ✅ Add this line

export const metadata = {
  title: 'Tu Sitio',
  description: 'Descripción del sitio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* ✅ Global footer appears below all content */}
        <Footer />
      </body>
    </html>
  );
}
