import React from 'react';

export function CentersContact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Entre em Contato
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Conheça o Centro de Referência mais próximo de você e saiba mais sobre 
          nossos programas e serviços.
        </p>
        <div className="space-x-4">
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Encontre um Centro
          </button>
          <button className="bg-gray-100 text-brown-600 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}