import React from 'react';
import { Target, Users, Heart, Shield, Network } from 'lucide-react';

const initiatives = [
  {
    icon: Target,
    title: "Políticas Públicas",
    description: "Desenvolvimento e proposição de políticas públicas voltadas para a equidade racial e de gênero."
  },
  {
    icon: Users,
    title: "Sustentabilidade",
    description: "Fomento a iniciativas e projetos de sustentabilidade liderados por mulheres negras."
  },
  {
    icon: Heart,
    title: "Rede de Apoio",
    description: "Criação e fortalecimento de uma rede de apoio e colaboração entre mulheres negras."
  },
  {
    icon: Shield,
    title: "Equidade",
    description: "Promoção da equidade de gênero e racial em diversos setores da sociedade."
  },
  {
    icon: Network,
    title: "Networking",
    description: "Facilitação de conexões e oportunidades de networking entre profissionais."
  }
];

export function AdvocacyInitiatives() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossas Iniciativas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estabelecendo espaços para discussão, engajamento e ação de mulheres negras 
            liderando e influenciando iniciativas sustentáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
              <initiative.icon className="w-10 h-10 text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}