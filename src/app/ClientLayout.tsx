'use client';

import { ReactNode, useEffect } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((reg) => console.log('✅ Service Worker registered:', reg.scope))
          .catch((err) => console.error('❌ Service Worker registration failed:', err));
      });
    }
  }, []);

  return <>{children}</>;
}
