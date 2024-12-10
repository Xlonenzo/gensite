import React from 'react';

export function EventsCalendar() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calendário de Eventos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planeje sua participação em nossos eventos ao longo do ano
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          {/* Calendar implementation would go here */}
          <p className="text-center text-gray-600">
            Em breve: Calendário interativo com todos os nossos eventos
          </p>
        </div>
      </div>
    </section>
  );
}