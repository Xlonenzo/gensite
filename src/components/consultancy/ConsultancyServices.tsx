import React from 'react';
import { Users, Target, BookOpen, LineChart, Presentation, Shield } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Diagnóstico Organizacional",
    description: "Análise completa do ambiente organizacional para identificar oportunidades de melhoria em D&I."
  },
  {
    icon: Target,
    title: "Desenvolvimento de Políticas",
    description: "Criação e implementação de políticas e práticas antirracistas e inclusivas."
  },
  {
    icon: BookOpen,
    title: "Treinamentos e Workshops",
    description: "Programas educacionais personalizados sobre viés inconsciente, equidade racial e inclusão."
  },
  {
    icon: LineChart,
    title: "Métricas e Avaliação",
    description: "Desenvolvimento de indicadores e acompanhamento de resultados em D&I."
  },
  {
    icon: Presentation,
    title: "Mentoria de Lideranças",
    description: "Capacitação de líderes para promover e sustentar uma cultura inclusiva."
  },
  {
    icon: Shield,
    title: "Gestão de Programas",
    description: "Implementação e gestão de programas de diversidade e inclusão."
  }
];

export function ConsultancyServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços para apoiar sua jornada em direção
            a uma cultura organizacional mais diversa e inclusiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
              <service.icon className="w-10 h-10 text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}