import React from 'react';

export function TourismGuides() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Guias Especializados
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossos guias são especialistas em história e cultura afro-brasileira,
              proporcionando uma experiência rica em conhecimento e conexão com nossas raízes.
            </p>
            <ul className="space-y-4">
              {[
                "Profundo conhecimento histórico e cultural",
                "Experiência em turismo étnico",
                "Domínio de múltiplos idiomas",
                "Formação em história afro-brasileira",
                "Conexão com comunidades locais"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Por que escolher nossos guias?
            </h3>
            <ul className="space-y-4">
              {[
                "Conhecimento profundo da história local",
                "Conexões com comunidades tradicionais",
                "Experiência em turismo cultural",
                "Compromisso com a autenticidade",
                "Formação especializada",
                "Fluência em diversos idiomas"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brown-100 text-brown-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}