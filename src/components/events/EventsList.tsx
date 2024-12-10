import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "Festival Cultural Afro-Brasileiro",
    date: "15 de Julho, 2024",
    time: "14:00 - 22:00",
    location: "Parque do Ibirapuera, São Paulo",
    description: "Celebração da cultura afro-brasileira com música, dança, gastronomia e arte.",
    image: "https://images.unsplash.com/photo-1496024840928-4c417adf211d"
  },
  {
    title: "Workshop de Empreendedorismo",
    date: "20 de Julho, 2024",
    time: "09:00 - 17:00",
    location: "Centro Cultural São Paulo",
    description: "Capacitação em empreendedorismo com foco em negócios afro-brasileiros.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
  },
  {
    title: "Seminário de Educação Antirracista",
    date: "25 de Julho, 2024",
    time: "10:00 - 18:00",
    location: "Universidade de São Paulo",
    description: "Discussões e palestras sobre práticas educacionais antirracistas.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
  }
];

export function EventsList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira nossa programação de eventos e participe das atividades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="w-full bg-brown-600 text-white px-4 py-2 rounded-full hover:bg-brown-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}