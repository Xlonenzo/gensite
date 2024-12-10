import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="https://i.imgur.com/XYZ123.png" 
        alt="GEN - Grupo Espaço Negro" 
        className="h-12 w-auto"
        style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1234%) hue-rotate(346deg) brightness(92%) contrast(87%)' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = '<div class="flex items-center"><span class="text-2xl font-bold text-brown-600">GEN</span></div>';
        }}
      />
    </div>
  );
}