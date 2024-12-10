import React from 'react';

const testimonials = [
  {
    quote: "Uma experiência única que me conectou profundamente com minhas raízes africanas.",
    author: "Maria Silva",
    role: "Participante do Tour Cultural"
  },
  {
    quote: "Os guias são extremamente conhecedores e proporcionam uma experiência autêntica.",
    author: "João Santos",
    role: "Turista Cultural"
  },
  {
    quote: "Conhecer os quilombos foi uma experiência transformadora e educativa.",
    author: "Ana Oliveira",
    role: "Educadora"
  }
];

export function TourismTestimonials() {
  return (
    <section className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que dizem nossos visitantes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiências autênticas que transformam vidas e conectam pessoas com suas raízes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brown-600">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}