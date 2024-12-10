import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const regions = [
  {
    name: "ZONA LESTE",
    centers: [
      {
        name: "Centro de Referência de Promoção da Igualdade Racial – Leste 1",
        address: "Av. dos Metalúrgicos, 155 - Cidade Tiradentes",
        schedule: "segunda a sexta-feira, das 9h às 18h",
        email: "smdhccrpirleste1@prefeitura.sp.gov.br",
        phone: "(11) 2558-8896",
        whatsapp: ["(11) 9 7624-8258", "(11) 97446-6741", "(11) 97463-5716"]
      },
      {
        name: "Centro de Referência de Promoção da Igualdade Racial – Leste 2",
        location: "Casa de Cultura de Itaim Paulista",
        address: "R. Monte Camberela, 490 - Vila Silva Teles",
        schedule: "terça a sexta-feira, das 9h às 18h",
        email: "smdhccrpirleste2@prefeitura.sp.gov.br",
        phone: "(11) 2558-8896",
        whatsapp: ["(11) 97446-8738"]
      },
      {
        name: "Centro de Referência de Promoção da Igualdade Racial – São Miguel Paulista",
        address: "Rua Crisolita Rodrigues Pereira, 6 (próximo à estação São Miguel Paulista da CPTM)",
        schedule: "segunda à sexta-feira, das 11h às 20h",
        whatsapp: ["(11) 9 7463-5716"]
      }
    ]
  },
  {
    name: "REGIÃO CENTRAL",
    centers: [
      {
        name: "Centro de Referência de Promoção da Igualdade Racial",
        location: "Centro Cultural Vila Itororó",
        address: "R. Maestro Cardim, 60 - Bela Vista",
        schedule: "terça a sexta, das 9h às 18h",
        email: "smdhccrpircentro@prefeitura.sp.gov.br",
        whatsapp: ["(11) 97431-8628"]
      },
      {
        name: "Centro de Referência de Promoção da Igualdade Racial - Sé",
        address: "Rua Francisca Miquelina, 140, Bela Vista",
        schedule: "terça a sexta, das 11h às 20h",
        whatsapp: ["(11) 97431-8628"]
      }
    ]
  },
  {
    name: "ZONA OESTE",
    centers: [
      {
        name: "Centro de Referência de Promoção da Igualdade Racial – Oeste",
        location: "Casa de Cultura do Butantã",
        address: "Av. Junta Mizumoto, 13 - Jardim Peri Peri",
        schedule: "terça a sexta, das 9h às 18h",
        email: "smdhccrpiroeste@prefeitura.sp.gov.br",
        whatsapp: ["(11) 97441-4192"]
      },
      {
        name: "Centro de Referência da Igualdade Racial Vila Sônia",
        address: "R. Mario Dias, 162, Jd. Trussardi",
        schedule: "de segunda a sexta, das 11h às 20h",
        email: "smdhccpiroeste@prefeitura.sp.gov.br",
        phone: "(11) 97441-4192"
      }
    ]
  },
  {
    name: "ZONA NORTE",
    centers: [
      {
        name: "Centro de Referência de Promoção da Igualdade racial - Norte 1",
        location: "Subprefeitura Vila Maria/Vila Guilherme",
        address: "R. General Mendes n° 111 - Vila Maria Alta",
        schedule: "segunda a sexta, das 9h às 18h",
        email: "smdhccpirnorte1@prefeitura.sp.gov.br",
        phone: ["(11) 98467-4254", "(11) 95330-2300", "(11) 95160-2100"],
        whatsapp: ["(11) 98467-4254"]
      },
      {
        name: "Centro de Referência de Promoção da Igualdade Racial - Norte 2",
        location: "Fábrica de Cultura da Brasilândia",
        address: "Av. General Penha Brasil, 2508 - Brasilândia",
        schedule: "terça a sexta, das 9h às 18h",
        email: "smdhccrpirnorte2@prefeitura.sp.gov.br",
        phone: ["(11) 98467-5086", "(11) 98717-2400", "(11) 94839-2400"],
        whatsapp: ["(11) 98467-5086"]
      }
    ]
  },
  {
    name: "ZONA SUL",
    centers: [
      {
        name: "Centro de Referência de Promoção da Igualdade Racial – Sul 1",
        location: "Casa de Cultura Campo Limpo Nathalia Rosemburg",
        address: "R. Aroldo de Azevedo, 100 - Jardim Bom Refúgio",
        schedule: "terça a sexta, das 9h às 18h",
        email: "smdhccrpirsul1@prefeitura.sp.gov.br",
        whatsapp: ["(11) 99425-7265"]
      },
      {
        name: "Centro de Referência de Promoção da Igualdade Racial – Sul 2",
        location: "Subprefeitura Parelheiros/Descomplica Parelheiros",
        address: "Estrada Ecoturística de Parelheiros, 5252 - Jd. dos Álamos - Parelheiros",
        schedule: "segunda a sexta-feira. Horário: 8h às 17h",
        email: "smdhccrpirsul2@prefeitura.sp.gov.br",
        phone: ["11 2167-9324", "9333"],
        whatsapp: ["(11) 99162-4755"]
      }
    ]
  }
];

export function CentersList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {regions.map((region) => (
            <div key={region.name}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{region.name}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {region.centers.map((center, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {center.name}
                    </h3>
                    {center.location && (
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Local:</span> {center.location}
                      </p>
                    )}
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-brown-600 mt-1 mr-2" />
                        <p className="text-gray-600">{center.address}</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-brown-600 mt-1 mr-2" />
                        <p className="text-gray-600">
                          <span className="font-medium">Atendimento:</span> {center.schedule}
                        </p>
                      </div>
                      {center.email && (
                        <div className="flex items-start">
                          <Mail className="w-5 h-5 text-brown-600 mt-1 mr-2" />
                          <p className="text-gray-600">{center.email}</p>
                        </div>
                      )}
                      {(center.phone || center.whatsapp) && (
                        <div className="flex items-start">
                          <Phone className="w-5 h-5 text-brown-600 mt-1 mr-2" />
                          <div>
                            {Array.isArray(center.phone) ? (
                              center.phone.map((p, i) => (
                                <p key={i} className="text-gray-600">
                                  {p}
                                </p>
                              ))
                            ) : (
                              center.phone && <p className="text-gray-600">{center.phone}</p>
                            )}
                            {center.whatsapp && (
                              <div className="mt-1">
                                <span className="font-medium">WhatsApp:</span>{' '}
                                {center.whatsapp.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coordenação de Promoção da Igualdade Racial</h2>
          <div className="space-y-3">
            <p className="text-gray-700">Secretaria Municipal de Direitos Humanos e Cidadania</p>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-brown-600 mt-1 mr-2" />
              <p className="text-gray-600">Rua Líbero Badaró, 119, 9º andar</p>
            </div>
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-brown-600 mt-1 mr-2" />
              <div>
                <p className="text-gray-600">combateaoracismo@prefeitura.sp.gov.br</p>
                <p className="text-gray-600">smdhccpir@prefeitura.sp.gov.br</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-brown-600 mt-1 mr-2" />
              <p className="text-gray-600">(11) 2558-8896</p>
            </div>
          </div>
          <div className="mt-6 text-gray-700">
            <p className="font-medium">Para denunciar, disque 156</p>
            <a 
              href="https://sp156.prefeitura.sp.gov.br/"
              className="text-brown-600 hover:text-brown-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal de Atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}