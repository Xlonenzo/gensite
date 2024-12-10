import React from 'react';

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1583275479278-7b7cd3c11c6f",
    title: "Quilombos Históricos",
    location: "Vale do Ribeira, SP",
    description: "Visite comunidades quilombolas e conheça sua história de resistência e cultura."
  },
  {
    image: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4",
    title: "Terreiros Tradicionais",
    location: "Salvador, BA",
    description: "Conheça espaços sagrados e aprenda sobre as religiões de matriz africana."
  },
  {
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
    title: "Rotas Gastronômicas",
    location: "Rio de Janeiro, RJ",
    description: "Explore a culinária afro-brasileira em mercados e restaurantes tradicionais."
  }
];

export function TourismDestinations() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Destinos em Destaque</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos principais destinos que contam a história e preservam
            a cultura afro-brasileira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {destination.title}
                </h3>
                <p className="text-brown-600 mb-3">{destination.location}</p>
                <p className="text-gray-600">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}