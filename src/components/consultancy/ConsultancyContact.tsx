import React from 'react';

export function ConsultancyContact() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Pronto para Transformar sua Organização?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Entre em contato conosco para uma consultoria personalizada em diversidade e inclusão.
        </p>
        <div className="space-x-4">
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Agende uma Consulta
          </button>
          <button className="bg-white text-brown-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}