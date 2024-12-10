import React from 'react';

export function ConsultancyHero() {
  return (
    <section className="relative bg-brown-900 text-white py-24">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Consultoria em Diversidade e Inclusão
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Transforme sua organização com nossa expertise em equidade racial e inclusão.
            Desenvolvemos soluções personalizadas para criar ambientes mais diversos e inclusivos.
          </p>
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Agende uma Consulta
          </button>
        </div>
      </div>
    </section>
  );
}