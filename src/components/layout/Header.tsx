import React, { useState } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <Navigation className="hidden md:flex space-x-8" />

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleContrast}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Alternar alto contraste"
            >
              {isHighContrast ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}