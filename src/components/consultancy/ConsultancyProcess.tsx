import React from 'react';
import { Search, Users, Target, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Análise detalhada do cenário atual da organização em relação à D&I."
  },
  {
    icon: Target,
    title: "Planejamento",
    description: "Desenvolvimento de estratégias e metas personalizadas."
  },
  {
    icon: Users,
    title: "Implementação",
    description: "Execução das ações e programas definidos."
  },
  {
    icon: LineChart,
    title: "Monitoramento",
    description: "Acompanhamento contínuo e ajustes necessários."
  }
];

export function ConsultancyProcess() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Processo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma abordagem estruturada para garantir resultados efetivos e duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brown-100 mb-4">
                  <step.icon className="w-8 h-8 text-brown-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brown-200 -translate-y-1/2" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}