import React from 'react';
import { CheckCircle } from 'lucide-react';

const skills = [
  "Liderança e Gestão de Equipes",
  "Comunicação e Oratória",
  "Resolução de Problemas Complexos",
  "Pensamento Crítico e Analítico",
  "Inteligência Emocional",
  "Criatividade e Inovação",
  "Adaptabilidade e Resiliência",
  "Trabalho em Equipe",
  "Gestão do Tempo",
  "Tomada de Decisão"
];

export function DevelopmentSkills() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Habilidades Desenvolvidas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Competências essenciais para o sucesso profissional no mercado atual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-brown-600 flex-shrink-0" />
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}