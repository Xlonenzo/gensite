import React from 'react';

export function BlogHero() {
  return (
    <section className="relative bg-brown-900 text-white py-24">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Repositório de Documentos
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Acesse nossa biblioteca digital com documentos, relatórios e publicações 
            sobre equidade racial e transformação social.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar documentos..."
              className="w-full px-6 py-3 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition-colors">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}