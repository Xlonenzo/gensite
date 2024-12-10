import React from 'react';

export function BlogNewsletter() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Receba Nossas Atualizações
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Inscreva-se em nossa newsletter para receber os últimos artigos, notícias
          e atualizações sobre nosso trabalho.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            />
            <button className="bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition-colors">
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}