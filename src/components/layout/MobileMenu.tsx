import React from 'react';
import { NavLink } from './NavLink';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

const mainNavItems = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/contato', label: 'Contato' }
];

const services = [
  { href: '/consultoria', label: 'Consultoria D&I' },
  { href: '/advocacy', label: 'Advocacy' },
  { href: '/desenvolvimento', label: 'Desenvolvimento' },
  { href: '/turismo', label: 'TOA Turismo' },
  { href: '/educacao', label: 'TOA' },
  { href: '/centros', label: 'Centros' }
];

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {mainNavItems.map((item) => (
          <NavLink key={item.href} href={item.href} mobile>
            {item.label}
          </NavLink>
        ))}
        
        <div className="relative">
          <button
            className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-brown-600"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Serviços
            <ChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isServicesOpen && (
            <div className="pl-4 space-y-1">
              {services.map((service) => (
                <NavLink key={service.href} href={service.href} mobile>
                  {service.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}