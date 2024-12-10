import React from 'react';
import { Users, Network, Laptop, Target, LineChart } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Público Alvo",
    description: "Pessoa Jurídica e Pessoa Física (em grupos ou indivíduais)"
  },
  {
    icon: Network,
    title: "Relacionamento",
    description: "Plataforma e emprego"
  },
  {
    icon: Target,
    title: "Tecnologia",
    description: "Vantagem competitiva – serviços recorrentes de empresas parceiras"
  }
];

export function TourismServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
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