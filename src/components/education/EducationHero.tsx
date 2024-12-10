import React from 'react';

export function EducationHero() {
  return (
    <section className="relative bg-brown-900 text-white py-24">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tecendo o Amanhã
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Programa educacional que promove o desenvolvimento integral de crianças
            através de uma abordagem antirracista e culturalmente responsiva.
          </p>
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}