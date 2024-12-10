import React from 'react';
import { Lightbulb, Users, Target, Presentation, BookOpen, Award } from 'lucide-react';

const programs = [
  {
    icon: Lightbulb,
    title: "Liderança Inovadora",
    description: "Desenvolvimento de habilidades de liderança com foco em inovação e gestão de equipes diversas."
  },
  {
    icon: Users,
    title: "Comunicação Efetiva",
    description: "Técnicas avançadas de comunicação para ambientes profissionais multiculturais."
  },
  {
    icon: Target,
    title: "Gestão de Projetos",
    description: "Metodologias ágeis e ferramentas para gerenciamento eficiente de projetos."
  },
  {
    icon: Presentation,
    title: "Pensamento Estratégico",
    description: "Desenvolvimento de visão estratégica e tomada de decisão."
  },
  {
    icon: BookOpen,
    title: "Cultura Digital",
    description: "Competências digitais essenciais para o mercado de trabalho atual."
  },
  {
    icon: Award,
    title: "Empreendedorismo",
    description: "Habilidades empreendedoras e desenvolvimento de negócios."
  }
];

export function DevelopmentPrograms() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Programas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos programas específicos para potencializar suas habilidades
            e impulsionar sua carreira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
              <program.icon className="w-10 h-10 text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}