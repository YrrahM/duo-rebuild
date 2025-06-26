import React from 'react';

export default function FeatureCards() {
  return (
    <section
  id="features"
  className="min-h-screen py-20 px-4 text-center bg-gradient-to-b from-blue-50 via-white to-gray-100"
>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">¿Qué Ofrezco?</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Inglés de Negocios</h3>
            <p className="text-gray-700">
              Aprende el idioma que necesitas para reuniones, presentaciones y correos profesionales.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Clases Personalizadas</h3>
            <p className="text-gray-700">
              Diseñadas para tus metas específicas en tu sector profesional.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Horario Flexible</h3>
            <p className="text-gray-700">
              Clases online que se adaptan a tu agenda y ritmo de aprendizaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
