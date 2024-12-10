import React from 'react';
import { Button } from '../components/common/Button';

export function Donate() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Faça sua Doação</h1>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <p className="text-lg text-gray-600 mb-8">
          Sua contribuição é fundamental para mantermos nossos projetos e iniciativas.
          Escolha a melhor forma de doar:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Transferência Bancária</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p className="font-medium">INSTITUTO SOCIAL ESPAÇO NEGRO</p>
              <p className="font-medium">CNPJ: 10.749.468/0001-37</p>
              <p className="font-medium">Banco: Banco do Brasil</p>
              <p className="font-medium">Agência: 3052-0</p>
              <p className="font-medium">Conta Corrente: 29755-0</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Pix</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-medium">CNPJ: 10.749.468/0001-37</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}