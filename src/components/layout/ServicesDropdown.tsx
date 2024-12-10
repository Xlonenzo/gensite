import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Users, Scale, Lightbulb, Compass, GraduationCap, Building2 } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Consultoria D&I",
    description: "Assessoria especializada em Diversidade e Inclusão",
    href: "/consultoria"
  },
  {
    icon: Scale,
    title: "Advocacy",
    description: "Promoção da diversidade, equidade e inclusão",
    href: "/advocacy"
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento",
    description: "Desenvolvimento de habilidades inovadoras",
    href: "/desenvolvimento"
  },
  {
    icon: Compass,
    title: "TOA Turismo",
    description: "Turismo étnico-afro e experiências culturais",
    href: "/turismo"
  },
  {
    icon: GraduationCap,
    title: "TOA",
    description: "Programa educacional culturalmente responsivo",
    href: "/educacao"
  },
  {
    icon: Building2,
    title: "Centros",
    description: "Centros de Referência de Promoção da Igualdade Racial",
    href: "/centros"
  }
];

export function ServicesDropdown() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleServiceClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-700 hover:text-brown-600 transition-colors text-sm font-medium"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Serviços
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {services.map((service) => (
            <button
              key={service.href}
              onClick={() => handleServiceClick(service.href)}
              className="flex items-start p-4 hover:bg-gray-50 transition-colors w-full text-left"
            >
              <service.icon className="w-5 h-5 text-brown-600 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">{service.title}</div>
                <div className="text-xs text-gray-500">{service.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}