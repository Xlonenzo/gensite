import React from 'react';
import { Compass, Users, Coffee, Music, Book, Camera } from 'lucide-react';

const experiences = [
  {
    icon: Compass,
    title: "Roteiros Culturais",
    description: "Explore territórios históricos e culturais da presença africana no Brasil."
  },
  {
    icon: Users,
    title: "Vivências Comunitárias",
    description: "Interaja com comunidades tradicionais e aprenda sobre suas práticas culturais."
  },
  {
    icon: Coffee,
    title: "Gastronomia Afro",
    description: "Deguste a rica culinária afro-brasileira e aprenda sobre sua história."
  },
  {
    icon: Music,
    title: "Manifestações Artísticas",
    description: "Participe de apresentações de música, dança e outras expressões culturais."
  },
  {
    icon: Book,
    title: "Roteiros Educativos",
    description: "Aprenda sobre a história e contribuições da cultura africana no Brasil."
  },
  {
    icon: Camera,
    title: "Fotografia Étnica",
    description: "Capture a beleza e diversidade da cultura afro-brasileira."
  }
];

export function TourismExperiences() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiências Únicas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra experiências turísticas que celebram e preservam a herança africana
            em toda sua autenticidade e riqueza cultural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
              <experience.icon className="w-10 h-10 text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}