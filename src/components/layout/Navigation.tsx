import React from 'react';
import { NavLink } from './NavLink';
import { ServicesDropdown } from './ServicesDropdown';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = '' }: NavigationProps) {
  const mainNavItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/blog', label: 'Blog' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/contato', label: 'Contato' }
  ];

  return (
    <nav className={className}>
      {mainNavItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
      <ServicesDropdown />
    </nav>
  );
}