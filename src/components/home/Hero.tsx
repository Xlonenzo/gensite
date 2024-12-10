import React from 'react';
import { Button } from '../common/Button';

export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
        alt="Grupo de pessoas diversas trabalhando juntas"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Instituto Social Espaço Negro
          </h1>
          <p className="text-xl text-white mb-8">
            Construindo uma sociedade mais justa e igualitária através da educação, 
            cultura e ação social
          </p>
          <div>
            <Button href="/doe" variant="primary">
              Doe Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}