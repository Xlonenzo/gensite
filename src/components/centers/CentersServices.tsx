import React from 'react';
import { BookOpen, Users, Target, Heart, Shield, Award } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "Formação e Capacitação",
    description: "Programas educacionais e workshops sobre relações étnico-raciais."
  },
  {
    icon: Users,
    title: "Acolhimento",
    description: "Atendimento humanizado e orientação para a população negra."
  },
  {
    icon: Target,
    title: "Políticas Públicas",
    description: "Desenvolvimento e implementação de ações afirmativas."
  },
  {
    icon: Heart,
    title: "Apoio Cultural",
    description: "Promoção e valorização da cultura afro-brasileira."
  },
  {
    icon: Shield,
    title: "Defesa de Direitos",
    description: "Suporte jurídico e orientação sobre direitos."
  },
  {
    icon: Award,
    title: "Desenvolvimento Social",
    description: "Programas de empoderamento e desenvolvimento comunitário."
  }
];

export function CentersServices() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os serviços oferecidos pelos nossos Centros de Referência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brown-100 mb-6">
                <service.icon className="w-6 h-6 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}