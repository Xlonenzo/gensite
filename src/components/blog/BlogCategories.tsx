import React from 'react';
import { BookOpen, Users, Target, Heart, Briefcase, Music } from 'lucide-react';

const categories = [
  { name: "Educação", icon: BookOpen, count: 12 },
  { name: "Cultura", icon: Music, count: 8 },
  { name: "Sociedade", icon: Users, count: 15 },
  { name: "Direitos", icon: Target, count: 10 },
  { name: "Empreendedorismo", icon: Briefcase, count: 7 },
  { name: "Comunidade", icon: Heart, count: 9 }
];

export function BlogCategories() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Categorias</h2>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <category.icon className="w-5 h-5 text-brown-600 mr-3" />
                <span className="text-gray-700">{category.name}</span>
              </div>
              <span className="bg-brown-100 text-brown-600 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tags Populares</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Antirracismo",
            "Cultura",
            "Educação",
            "Empoderamento",
            "Equidade",
            "Inclusão",
            "Justiça Social",
            "Representatividade"
          ].map((tag, index) => (
            <a
              key={index}
              href="#"
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-brown-100 hover:text-brown-600 transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}