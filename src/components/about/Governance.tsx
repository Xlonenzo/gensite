import React from 'react';
import { Users, Shield, Heart } from 'lucide-react';

export function Governance() {
  return (
    <section className="py-16 bg-brown-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Governança Inclusiva: Direção Negra com Equidade de Gênero e Diversidade
        </h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            A governança do GEN é comprometida com a equidade racial e de gênero, refletindo 
            sua missão de promover uma sociedade mais inclusiva e diversa. A organização adota 
            uma diretoria majoritariamente composta por pessoas negras, com a equidade de gênero 
            como princípio fundamental, garantindo que as mulheres negras tenham uma representação 
            significativa nos espaços de decisão e liderança.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Propósito</h3>
          <p className="text-gray-700 mb-6">
            A diversidade é uma característica essencial da estrutura do GEN, e, para garantir 
            uma gestão eficiente e representativa, a organização promove ações concretas que asseguram:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Users className="w-5 h-5 text-brown-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold">Equidade de gênero:</span>
                <p className="text-gray-700">
                  Garantindo a paridade entre homens e mulheres na liderança, com especial 
                  atenção às mulheres negras e suas necessidades e desafios específicos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Shield className="w-5 h-5 text-brown-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold">Diversidade racial e étnica:</span>
                <p className="text-gray-700">
                  Promovendo a inserção de pessoas negras, indígenas, quilombolas e outras 
                  populações tradicionais nos processos de tomada de decisão.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Heart className="w-5 h-5 text-brown-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold">Inclusão de outras identidades:</span>
                <p className="text-gray-700">
                  Incorporando uma abordagem interseccional que também abarca as questões de 
                  orientação sexual, identidade de gênero e deficiência.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}