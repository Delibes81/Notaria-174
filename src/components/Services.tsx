import React from 'react';
import { Home, Building2, Heart, FileText, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string, service?: string) => void;
  showAll?: boolean;
}

const Services: React.FC<ServicesProps> = ({ onNavigate, showAll = false }) => {
  const services = [
    {
      id: 'inmobiliario',
      icon: Home,
      title: 'Derecho Inmobiliario',
      description: 'Compraventa, hipotecas, donaciones y todos los actos relacionados con bienes inmuebles.',
      items: ['Compraventa de inmuebles', 'Constitución de hipotecas', 'Donaciones', 'Permutas']
    },
    {
      id: 'corporativo',
      icon: Building2,
      title: 'Derecho Corporativo',
      description: 'Constitución de sociedades, asambleas, poderes y actos mercantiles.',
      items: ['Constitución de sociedades', 'Asambleas de accionistas', 'Poderes generales', 'Actos mercantiles']
    },
    {
      id: 'familiar',
      icon: Heart,
      title: 'Derecho Familiar y Sucesorio',
      description: 'Testamentos, sucesiones, capitulaciones matrimoniales y actos familiares.',
      items: ['Testamentos', 'Sucesiones intestamentarias', 'Capitulaciones matrimoniales', 'Divorcios voluntarios']
    },
    {
      id: 'civil',
      icon: FileText,
      title: 'Actos Civiles',
      description: 'Contratos, reconocimiento de firma, certificaciones y fe de hechos.',
      items: ['Contratos diversos', 'Reconocimiento de firma', 'Certificaciones', 'Fe de hechos']
    }
  ];

  const displayServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-dark mb-6">
            {showAll ? 'Todos Nuestros Servicios' : 'Nuestros Servicios Principales'}
          </h2>
          <p className="font-sans text-lg text-charcoal max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios notariales especializados, 
            diseñados para satisfacer las necesidades jurídicas de personas y empresas 
            con la máxima seguridad y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-warm-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onNavigate('service-detail', service.id)}
              >
                <div className="text-center">
                  <div className="bg-gold-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-accent group-hover:bg-opacity-100 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-gold-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-navy-dark mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-charcoal mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {showAll && (
                    <ul className="font-sans text-sm text-charcoal space-y-2 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gold-accent rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-center text-gold-accent font-sans font-medium group-hover:text-navy-dark transition-colors duration-300">
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('services')}
              className="bg-navy-dark text-white px-8 py-4 rounded-md font-sans font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Ver Todos los Servicios
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;