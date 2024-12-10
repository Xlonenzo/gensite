import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseStyles = "text-gray-700 hover:text-brown-600 transition-colors";
  const mobileStyles = mobile 
    ? "block px-3 py-2 text-base font-medium" 
    : "text-sm font-medium";

  return (
    <Link to={href} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </Link>
  );
}