import React from 'react';
import { Scale, Users, Target, Heart, Shield, Eye, Star, Globe, Book, Lightbulb, Network } from 'lucide-react';

const values = [
  {
    icon: Scale,
    title: "Igualdade racial",
    description: "Compromisso com a eliminação de todas as formas de discriminação racial e a promoção de igualdade de oportunidades para a população negra."
  },
  {
    icon: Heart,
    title: "Respeito e valorização da cultura negra",
    description: "Apoio à preservação e difusão das tradições, histórias e manifestações culturais negras."
  },
  {
    icon: Shield,
    title: "Justiça social",
    description: "Luta constante contra as desigualdades sociais e pela garantia de direitos fundamentais para a população negra."
  },
  {
    icon: Users,
    title: "Empoderamento comunitário",
    description: "Fomento ao protagonismo e à autonomia das pessoas negras na construção de suas trajetórias e no desenvolvimento coletivo."
  },
  {
    icon: Network,
    title: "Solidariedade",
    description: "Promoção de uma rede de apoio entre pessoas e organizações que defendem a igualdade racial e social."
  },
  {
    icon: Book,
    title: "Educação transformadora",
    description: "Compromisso com uma educação antirracista que valorize a história e cultura afro-brasileira."
  }
];

const visionPoints = [
  {
    icon: Eye,
    title: "Referência Cultural",
    description: "Ser referência no fortalecimento da cultura e dos direitos da população negra."
  },
  {
    icon: Scale,
    title: "Sociedade Igualitária",
    description: "Contribuir para uma sociedade mais justa e igualitária em todos os aspectos."
  },
  {
    icon: Shield,
    title: "Combate ao Racismo",
    description: "Promover uma sociedade antirracista através de ações efetivas e transformadoras."
  },
  {
    icon: Target,
    title: "Acesso Universal",
    description: "Garantir acesso a oportunidades e direitos para todos, sem distinção."
  },
  {
    icon: Globe,
    title: "Políticas Públicas",
    description: "Influenciar políticas públicas para promover a equidade racial."
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Lideranças",
    description: "Desenvolver e fortalecer lideranças negras em diversos setores da sociedade."
  }
];

export function MissionStatement() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Promover a inclusão social, o fortalecimento da identidade e cultura negra, 
            por meio de ações educativas, culturais e de advocacy, visando a redução das 
            desigualdades raciais e a promoção de justiça social e equidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Visão</h3>
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <point.icon className="w-6 h-6 text-brown-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{point.title}</h4>
                    <p className="text-gray-700 text-sm mt-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossos Valores</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <value.icon className="w-6 h-6 text-brown-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-gray-700 text-sm mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}