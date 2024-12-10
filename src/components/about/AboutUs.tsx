import React from 'react';
import { Users, Award, Target, Shield, Heart, Scale } from 'lucide-react';

export function AboutUs() {
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
      icon: Heart,
      title: "Solidariedade",
      description: "Promoção de uma rede de apoio entre pessoas e organizações que defendem a igualdade racial e social."
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h1>
          <div className="w-24 h-1 bg-brown-600 mx-auto"></div>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              O Instituto Social Espaço Negro (GEN) é uma organização social de interesse privado 
              fundada na cidade de São Paulo, no final da década de 80, com o propósito de contribuir 
              para a construção da identidade, valorização e emancipação da população negra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brown-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-brown-600" />
                Nossa Missão
              </h3>
              <p className="text-gray-700">
                Promover a inclusão social, o fortalecimento da identidade e cultura negra, 
                por meio de ações educativas, culturais e de advocacy, visando a redução das 
                desigualdades raciais e a promoção de justiça social e equidade.
              </p>
            </div>
            <div className="bg-brown-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-brown-600" />
                Nossa Visão
              </h3>
              <p className="text-gray-700">
                Ser referência no fortalecimento da cultura e dos direitos da população negra, 
                contribuindo para a construção de uma sociedade mais justa, igualitária e 
                antirracista, onde todas as pessoas tenham acesso a oportunidades e direitos.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <value.icon className="w-5 h-5 text-brown-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}