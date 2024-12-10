import React from 'react';

const partners = [
  {
    name: "Alicerce Educação",
    logo: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    url: "#"
  },
  {
    name: "Cidade de São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Bras%C3%A3o_da_Cidade_de_S%C3%A3o_Paulo.svg",
    url: "https://www.capital.sp.gov.br/"
  },
  {
    name: "Pacto pela Equidade Racial",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    url: "https://pactopelaequidaderacial.org.br/"
  }
];

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Parceiros</h2>
          <p className="mt-4 text-lg text-gray-600">
            Organizações que compartilham nossa missão de promover a equidade racial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[3/2]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-xl font-semibold text-gray-900">${partner.name}</span>`;
                    }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}