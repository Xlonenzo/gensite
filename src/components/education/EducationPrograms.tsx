import React from 'react';
import { BookOpen, Calculator, Music, ActivitySquare, Sword, Users, Laptop } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: "Leitura",
    description: "Promoção à leitura com foco em representatividade e autoestima"
  },
  {
    icon: Calculator,
    title: "Desafios Matemáticos",
    description: "Trilhas baseadas em desafios matemáticos"
  },
  {
    icon: Music,
    title: "Cultura",
    description: "Atividades culturais mensais"
  },
  {
    icon: ActivitySquare,
    title: "Esporte",
    description: "Semanalmente atividade esportiva e cultural"
  },
  {
    icon: Sword,
    title: "Capoeira",
    description: "Prática e história da capoeira"
  },
  {
    icon: Users,
    title: "Relações Raciais",
    description: "Atividades focadas nas relações étnico-raciais"
  },
  {
    icon: Laptop,
    title: "Tecnologia",
    description: "Promoção do letramento digital"
  }
];

export function EducationPrograms() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossas Atividades</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Programa completo de desenvolvimento integral através de atividades diversificadas
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