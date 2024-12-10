import React from 'react';
import { TrendingUp, Heart, Users, Shield } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Melhoria no Desempenho",
    description: "Equipes diversas são mais inovadoras e apresentam melhores resultados."
  },
  {
    icon: Heart,
    title: "Cultura Inclusiva",
    description: "Ambiente de trabalho mais acolhedor e produtivo para todos."
  },
  {
    icon: Users,
    title: "Atração de Talentos",
    description: "Maior capacidade de atrair e reter profissionais diversos."
  },
  {
    icon: Shield,
    title: "Reputação Fortalecida",
    description: "Reconhecimento como organização comprometida com a equidade racial."
  }
];

export function ConsultancyBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa consultoria pode transformar sua organização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brown-100 mb-6">
                <benefit.icon className="w-8 h-8 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}