import React from 'react';
import { Users, Lightbulb, Compass, GraduationCap, Building2, Scale } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Consultoria D&I",
    description: "Assessoria especializada em Diversidade e Inclusão para organizações que buscam implementar práticas mais inclusivas e equitativas em seu ambiente de trabalho.",
    link: "/consultoria"
  },
  {
    icon: Scale,
    title: "Advocacy",
    description: "Promoção da diversidade, equidade e inclusão com foco em mulheres negras, desenvolvendo lideranças e influenciando políticas públicas sustentáveis.",
    link: "/advocacy"
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Habilidades Inovadoras",
    description: "Workshops e mentorias focados no desenvolvimento de competências essenciais para o mercado de trabalho, com ênfase em liderança e inovação.",
    link: "/desenvolvimento"
  },
  {
    icon: Compass,
    title: "TOA Turismo",
    description: "Programa especializado em turismo étnico-afro, promovendo experiências culturais autênticas e valorizando a história e cultura afro-brasileira.",
    link: "/turismo"
  },
  {
    icon: GraduationCap,
    title: "TOA",
    description: "Programa educacional que promove o desenvolvimento integral de crianças através de uma abordagem culturalmente responsiva.",
    link: "/educacao"
  },
  {
    icon: Building2,
    title: "Centros de Referência",
    description: "Centros de Referência de Promoção da Igualdade Racial, oferecendo suporte, orientação e desenvolvimento de políticas públicas para a população negra.",
    link: "/centros"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções especializadas para promover a equidade racial e o desenvolvimento social
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brown-100 mb-6">
                <service.icon className="h-10 w-10 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="mt-6 text-brown-600 hover:text-brown-700 font-medium inline-flex items-center"
              >
                Saiba mais
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}