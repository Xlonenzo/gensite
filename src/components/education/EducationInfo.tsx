import React from 'react';
import { Users, Clock, School, Coffee } from 'lucide-react';

export function EducationInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações do Programa</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-brown-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Público Alvo</h3>
                  <p className="text-gray-600">Crianças da região do Jd. Elba, de 05 a 13 anos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-brown-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Refeição</h3>
                  <p className="text-gray-600">Almoço e lanche</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-brown-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quantidade de Atendidos</h3>
                  <p className="text-gray-600">60 crianças</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <School className="w-6 h-6 text-brown-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Metodologia de Ensino</h3>
                  <p className="text-gray-600">Diversos Métodos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Horário das Atividades
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brown-600" />
                <span className="text-gray-700">Segunda a Sexta-feira</span>
              </div>
              <div className="pl-8">
                <p className="text-gray-600">Manhã: 8h às 12h</p>
                <p className="text-gray-600">Tarde: 13h às 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}