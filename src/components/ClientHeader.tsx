'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Header component without SSR
const Header = dynamic(() => import('./Header'), { ssr: false });

export default function ClientHeader() {
  const [mounted, setMounted] = useState(false);

  // Wait until the component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR vs client mismatch

  return <Header />;
}
