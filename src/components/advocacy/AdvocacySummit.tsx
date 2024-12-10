import React from 'react';
import { Lightbulb, Users, Wallet } from 'lucide-react';

const programs = [
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Habilidades Inovadoras",
    description: "Workshops e mentorias com foco em tecnologias de ponta, como inteligência artificial, blockchain e big data, preparando as participantes para o futuro do trabalho."
  },
  {
    icon: Users,
    title: "Desenvolvimento de Liderança",
    description: "Oficinas práticas para fortalecer habilidades de liderança, comunicação, negociação, gestão de equipes e inteligência emocional, equipando as mulheres negras para assumirem papéis de destaque."
  },
  {
    icon: Wallet,
    title: "Empoderamento Financeiro",
    description: "Workshops sobre empreendedorismo, investimentos e gestão financeira, abrindo caminho para que as participantes explorem oportunidades de negócios e construam um futuro próspero."
  }
];

export function AdvocacySummit() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SUMMIT</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Programa de desenvolvimento integral focado no empoderamento e capacitação 
            de mulheres negras em posições de liderança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <program.icon className="w-12 h-12 text-brown-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}