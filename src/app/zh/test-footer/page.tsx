'use client';

import React from 'react';
import MainLayout from '@/components/MainLayout';

export default function TestFooterPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Prueba del Footer</h1>
        <p className="text-lg text-gray-700">
          Esta es una página temporal para probar el Footer en aislamiento.
        </p>
      </div>
    </MainLayout>
  );
}
