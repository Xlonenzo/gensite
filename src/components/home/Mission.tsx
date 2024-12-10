import React from 'react';
import { Target, BarChart3, Globe } from 'lucide-react';
import { Button } from '../common/Button';

const values = [
  {
    icon: Target,
    title: "Environmental",
    description: "Promovemos práticas sustentáveis que consideram o impacto ambiental nas comunidades negras e seus territórios."
  },
  {
    icon: Globe,
    title: "Social",
    description: "Implementamos políticas públicas que garantam direitos e oportunidades iguais para a população negra, combatendo o racismo estrutural."
  },
  {
    icon: BarChart3,
    title: "Governance",
    description: "Fortalecemos a equidade racial através do compromisso de organizações governamentais, empresariais e da sociedade civil."
  }
];

export function Mission() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">PROTOCOLO ESG RACIAL</h2>
          <p className="mt-4 text-lg text-gray-600">
            Promovido pelo Pacto pela Equidade Racial
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            Ações que combatam as desigualdades raciais e avancem para uma sociedade mais 
            justa e igualitária. Ele propõe a implementação de políticas públicas que 
            garantam direitos e oportunidades iguais para a população negra, combatendo o 
            racismo estrutural. O pacto envolve o compromisso de organizações governamentais, 
            empresariais e da sociedade civil para fortalecer a equidade racial. Seu objetivo 
            é garantir a inclusão social e econômica dos negros em diferentes esferas da sociedade.
          </p>
          <Button 
            href="https://pactopelaequidaderacial.org.br/"
            external
            variant="primary"
            className="mt-6"
          >
            Saiba mais sobre o Pacto pela Equidade Racial →
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brown-100 mb-4">
                <item.icon className="h-8 w-8 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}