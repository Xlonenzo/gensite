import React from 'react';
import { Globe, Users, BookOpen, Target, Heart, Shield } from 'lucide-react';

const methodologies = [
  {
    icon: Globe,
    title: "Pedagogia Afrocentrada",
    description: "Abordagem educacional que coloca a experiência africana e afro-brasileira no centro do processo de aprendizagem."
  },
  {
    icon: Users,
    title: "Aprendizagem Colaborativa",
    description: "Metodologia que estimula o trabalho em grupo e a construção coletiva do conhecimento."
  },
  {
    icon: BookOpen,
    title: "Educação Popular",
    description: "Práticas educativas que valorizam os saberes populares e a cultura local."
  },
  {
    icon: Target,
    title: "Metodologia Ativa",
    description: "Abordagem que coloca o estudante como protagonista do processo de aprendizagem."
  },
  {
    icon: Heart,
    title: "Pedagogia da Autonomia",
    description: "Desenvolvimento do pensamento crítico e da autonomia dos educandos."
  },
  {
    icon: Shield,
    title: "Educação Antirracista",
    description: "Práticas pedagógicas que combatem o racismo e promovem a equidade racial."
  }
];

export function EducationMethodology() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Metodologias Educacionais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa abordagem educacional integra diferentes metodologias para promover 
            uma educação transformadora, inclusiva e culturalmente responsiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brown-100 mb-6">
                <method.icon className="w-8 h-8 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}