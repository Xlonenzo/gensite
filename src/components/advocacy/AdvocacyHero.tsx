import React from 'react';

export function AdvocacyHero() {
  return (
    <section className="relative bg-brown-900 text-white py-24">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ADVOCACY: DIVERSIDADE, EQUIDADE E INCLUSÃO
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Promovendo mulheres negras em posições de liderança e influência para 
            um futuro mais equitativo e sustentável.
          </p>
        </div>
      </div>
    </section>
  );
}