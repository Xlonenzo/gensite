import React from 'react';
import { Target, Users, BookOpen } from 'lucide-react';

export function Commitment() {
  const commitments = [
    {
      icon: Target,
      text: "A promoção de políticas públicas e privadas antirracistas, que abordem as desigualdades estruturais de maneira eficaz."
    },
    {
      icon: Users,
      text: "A capacitação e desenvolvimento de lideranças negras e femininas, criando espaços para o fortalecimento de novas vozes e referências dentro da sociedade."
    },
    {
      icon: BookOpen,
      text: "A ampliação do acesso à educação de qualidade, saúde, segurança alimentar e ao mercado de trabalho para a população preta e periférica, com uma especial ênfase nas mulheres negras."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Compromisso com a Justiça Social e a Transformação Estrutural
        </h2>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-700">
            O GEN segue firme em seu compromisso com a justiça social e a transformação estrutural, 
            promovendo ações que vão além da inclusão, mas que visam uma mudança genuína no tecido 
            social. Isso inclui:
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <commitment.icon className="w-6 h-6 text-brown-600 mt-1 mr-4 flex-shrink-0" />
              <p className="text-gray-700">{commitment.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-gray-700">
          <p>
            O GEN se dedica, assim, a criar um futuro em que a diversidade seja reconhecida, 
            respeitada e valorizada, e onde a equidade se torne realidade em todas as áreas 
            da sociedade.
          </p>
        </div>
      </div>
    </section>
  );
}