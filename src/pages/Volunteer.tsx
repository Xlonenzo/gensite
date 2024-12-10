import React from 'react';
import { Button } from '../components/common/Button';

export function Volunteer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Seja Voluntário</h1>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <p className="text-lg text-gray-600 mb-8">
          Junte-se a nós na missão de construir uma sociedade mais justa e igualitária.
          Temos diversas áreas onde você pode contribuir com seu tempo e habilidades.
        </p>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Áreas de Atuação</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Educação e Mentoria</li>
            <li>Eventos Culturais</li>
            <li>Comunicação e Marketing</li>
            <li>Gestão de Projetos</li>
            <li>Apoio Administrativo</li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <Button href="/contato" variant="primary">
            Quero ser voluntário
          </Button>
          <p className="text-sm text-gray-500">
            Entraremos em contato para agendar uma conversa e conhecer melhor seu perfil.
          </p>
        </div>
      </div>
    </div>
  );
}