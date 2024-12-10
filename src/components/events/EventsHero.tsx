import React from 'react';

export function EventsHero() {
  return (
    <section className="relative bg-brown-900 text-white py-24">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Eventos e Atividades
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Participe de nossos eventos culturais, educacionais e sociais que celebram 
            e fortalecem a cultura afro-brasileira.
          </p>
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Ver Próximos Eventos
          </button>
        </div>
      </div>
    </section>
  );
}