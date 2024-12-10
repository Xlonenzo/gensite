import React from 'react';
import { Target, Users, Heart, Shield } from 'lucide-react';

export function CentersInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Atuação</h2>
          <p className="text-lg text-gray-600">
            Na cidade de São Paulo, os Centros de Referência de Promoção da Igualdade Racial 
            têm o objetivo de promover políticas públicas que combatam o racismo e as 
            desigualdades raciais, além de promover a valorização da cultura negra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nosso Propósito</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-brown-600 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Oferecer apoio a ações que buscam garantir direitos, estimular o 
                  protagonismo da população negra e implementar ações afirmativas em 
                  áreas como educação, saúde e cultura.
                </p>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-brown-600 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Criar espaços de acolhimento, orientação e desenvolvimento de 
                  atividades culturais, educativas e de formação política.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nosso Impacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-brown-600 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Atuamos como importantes pontos de apoio no enfrentamento do 
                  racismo estrutural.
                </p>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-brown-600 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Promovemos o fortalecimento da identidade e cultura afro-brasileira 
                  no município.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}