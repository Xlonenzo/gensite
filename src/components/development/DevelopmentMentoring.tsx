import React from 'react';
import { Users } from 'lucide-react';

export function DevelopmentMentoring() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Programa de Mentoria</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nosso programa de mentoria conecta você a profissionais experientes que 
              irão guiar seu desenvolvimento profissional e pessoal.
            </p>
            <ul className="space-y-4">
              {[
                "Mentoria individualizada",
                "Acompanhamento contínuo",
                "Feedback construtivo",
                "Networking qualificado",
                "Desenvolvimento de carreira"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-brown-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Como Funciona</h3>
            <ol className="space-y-4">
              {[
                "Inscrição no programa",
                "Avaliação de perfil e objetivos",
                "Matching com mentor",
                "Definição de metas",
                "Sessões regulares de mentoria",
                "Avaliação de progresso"
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brown-100 text-brown-600 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}