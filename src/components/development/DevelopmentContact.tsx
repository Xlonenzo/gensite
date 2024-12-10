import React from 'react';

export function DevelopmentContact() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Comece Sua Jornada de Desenvolvimento
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Inscreva-se em nossos programas e desenvolva as habilidades necessárias 
          para impulsionar sua carreira.
        </p>
        <div className="space-x-4">
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Inscreva-se Agora
          </button>
          <button className="bg-white text-brown-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}