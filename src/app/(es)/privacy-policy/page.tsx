import React from 'react';
import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: 'Política de Privacidad | businessenglish.vip',
  description: 'Lee nuestra política de privacidad para entender cómo manejamos tu información personal.',
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="mb-4">
          Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
          Al utilizar este sitio web, aceptas los términos descritos aquí.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Información que recopilamos</h2>
        <p className="mb-4">
          Podemos recopilar tu nombre, correo electrónico y otros datos cuando llenas formularios de contacto.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Uso de la información</h2>
        <p className="mb-4">
          Usamos tu información para responder a tus consultas y mejorar nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Protección de datos</h2>
        <p className="mb-4">
          Aplicamos medidas de seguridad para proteger tus datos personales contra acceso no autorizado.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Tus derechos</h2>
        <p className="mb-4">
          Puedes solicitarnos acceso, corrección o eliminación de tus datos personales escribiendo a
          <a href="mailto:info@businessenglish.vip" className="text-blue-600 underline ml-1">info@businessenglish.vip</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Cambios en esta política</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar esta política en cualquier momento. Te notificaremos aquí de los cambios.
        </p>
      </div>
    </MainLayout>
  );
}
