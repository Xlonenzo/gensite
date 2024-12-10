import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-full font-medium transition-colors';
  const variantStyles = {
    primary: 'bg-brown-600 text-white hover:bg-brown-700',
    secondary: 'bg-white text-brown-600 hover:bg-gray-100',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}