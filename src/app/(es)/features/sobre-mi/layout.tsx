import React from 'react';
import MainLayout from '@/components/MainLayout';

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
