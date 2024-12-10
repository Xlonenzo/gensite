import React from 'react';
import { Users, Building2 } from 'lucide-react';

export function History() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossa História</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            O Instituto Social Espaço Negro (GEN) é uma organização social de interesse privado 
            fundada na cidade de São Paulo, no final da década de 80, com o propósito de contribuir 
            para a construção da identidade, valorização e emancipação da população negra.
          </p>
          <p className="text-gray-700 mb-6">
            Desde sua fundação, o GEN tem se dedicado a promover a transformação social de grupos 
            que enfrentam desafios relacionados à segurança alimentar, ao acesso ao conhecimento, 
            à aquisição de habilidades sociais e comunitárias, além de fomentar a justiça social 
            e os direitos à educação, saúde e trabalho para a população preta.
          </p>
          <p className="text-gray-700 mb-6">
            Entre suas principais frentes de atuação, destaca-se o assessoramento por meio de 
            consultoria especializada em educação e desenvolvimento, com foco no combate ao 
            racismo estrutural na sociedade brasileira. O GEN acredita que a educação é a base 
            da transformação e, por isso, a governança e a educação antirracista permeiam todos 
            os seus processos, visando impactar positivamente o ecossistema social em busca de 
            equidade e valorização da diversidade.
          </p>
        </div>
      </div>
    </section>
  );
}