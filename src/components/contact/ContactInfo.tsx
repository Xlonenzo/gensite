import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-brown-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Endereço</h3>
            <p className="text-gray-600">
              Rua Agostinho Silva, 72<br />
              São Paulo - SP<br />
              CEP: 03978-200
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-brown-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Telefone</h3>
            <p className="text-gray-600">(11) 97402-9587</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-brown-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">E-mail</h3>
            <div className="space-y-1">
              <p className="text-gray-600">
                <span className="font-medium">Ednalva Moura:</span><br />
                nalvamoura@institutoespaconegro.org.br
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Giovana Souzza:</span><br />
                giovanasouza@grupoespaconegro.org.br
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-brown-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
            <p className="text-gray-600">
              Segunda a Sexta: 9h às 18h
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais</h3>
        <div className="space-y-2">
          <div>
            <a 
              href="https://www.instagram.com/grupoespaconegro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brown-600 transition-colors"
            >
              Instagram
            </a>
          </div>
          <div>
            <a 
              href="https://br.linkedin.com/company/instituto-social-espa%C3%A7o-negro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brown-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}