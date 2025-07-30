import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Users, FileText } from 'lucide-react';

interface ServiceDetailProps {
  service: string;
  onNavigate: (page: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onNavigate }) => {
  const serviceData: { [key: string]: any } = {
    inmobiliario: {
      title: 'Derecho Inmobiliario',
      description: 'Especialistas en todos los actos jurídicos relacionados con bienes inmuebles, garantizando la seguridad jurídica en cada transacción.',
      services: [
        'Compraventa de inmuebles',
        'Constitución y cancelación de hipotecas',
        'Donaciones de bienes inmuebles',
        'Permutas de propiedades',
        'Usufructos y servidumbres',
        'Regularización de propiedades',
        'Avalúos y peritajes'
      ],
      requirements: [
        'Identificación oficial vigente',
        'Comprobante de domicilio',
        'Documentos de propiedad',
        'Certificado de libertad de gravámenes',
        'Avalúo comercial actualizado'
      ],
      timeline: '15-30 días hábiles',
      icon: '🏠'
    },
    corporativo: {
      title: 'Derecho Corporativo y Mercantil',
      description: 'Asesoría integral en la constitución y operación de sociedades mercantiles, garantizando el cumplimiento de todas las disposiciones legales.',
      services: [
        'Constitución de sociedades mercantiles',
        'Asambleas de accionistas',
        'Modificaciones al objeto social',
        'Poderes generales y especiales',
        'Fusiones y escisiones',
        'Disolución y liquidación',
        'Protocolización de acuerdos'
      ],
      requirements: [
        'Identificación de socios/accionistas',
        'Comprobante de domicilio',
        'Permiso de uso de denominación',
        'Estatutos sociales',
        'Comprobante de capital social'
      ],
      timeline: '10-20 días hábiles',
      icon: '🏢'
    },
    familiar: {
      title: 'Derecho Familiar y Sucesorio',
      description: 'Protección del patrimonio familiar a través de instrumentos jurídicos que garantizan la seguridad de las futuras generaciones.',
      services: [
        'Testamentos públicos abiertos',
        'Testamentos públicos cerrados',
        'Sucesiones testamentarias',
        'Sucesiones intestamentarias',
        'Capitulaciones matrimoniales',
        'Divorcios voluntarios',
        'Adopciones'
      ],
      requirements: [
        'Identificación oficial vigente',
        'Acta de nacimiento',
        'Comprobante de domicilio',
        'CURP',
        'Documentos del patrimonio a heredar'
      ],
      timeline: '5-15 días hábiles',
      icon: '❤️'
    },
    civil: {
      title: 'Actos Civiles Diversos',
      description: 'Amplia gama de servicios notariales para satisfacer las necesidades jurídicas de personas físicas y morales.',
      services: [
        'Contratos de prestación de servicios',
        'Contratos de arrendamiento',
        'Reconocimiento de firma',
        'Certificaciones de documentos',
        'Fe de hechos',
        'Ratificación de contratos',
        'Informaciones testimoniales'
      ],
      requirements: [
        'Identificación oficial vigente',
        'Documentos a certificar',
        'Comprobante de domicilio',
        'Testigos (cuando aplique)'
      ],
      timeline: '1-5 días hábiles',
      icon: '📋'
    }
  };

  const currentService = serviceData[service] || serviceData.inmobiliario;

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('services')}
          className="flex items-center text-gold-accent hover:text-navy-dark transition-colors duration-300 mb-8 font-sans font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Servicios
        </button>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">{currentService.icon}</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
            {currentService.title}
          </h1>
          <p className="font-sans text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            {currentService.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Services List */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="bg-warm-white p-8 rounded-lg shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-navy-dark mb-6 flex items-center">
                <FileText className="h-6 w-6 text-gold-accent mr-3" />
                Servicios Incluidos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.services.map((service: string, index: number) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-md">
                    <CheckCircle className="h-5 w-5 text-gold-accent mr-3 flex-shrink-0" />
                    <span className="font-sans text-charcoal">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-navy-dark text-white p-8 rounded-lg shadow-lg mt-8">
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-gold-accent mr-3" />
                Documentos Requeridos
              </h2>
              <ul className="space-y-3 font-sans">
                {currentService.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="opacity-90">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Timeline */}
            <div className="bg-gold-accent text-white p-6 rounded-lg shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 mr-3" />
                <h3 className="font-serif text-xl font-bold">Tiempo de Proceso</h3>
              </div>
              <p className="font-sans text-2xl font-bold mb-2">{currentService.timeline}</p>
              <p className="font-sans text-sm opacity-90">
                *El tiempo puede variar según la complejidad del caso
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-warm-white p-6 rounded-lg shadow-lg">
              <h3 className="font-serif text-xl font-bold text-navy-dark mb-4">
                ¿Necesita más información?
              </h3>
              <p className="font-sans text-charcoal mb-6 leading-relaxed">
                Nuestro equipo está listo para brindarle asesoría personalizada 
                sobre este servicio.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-navy-dark text-white py-3 rounded-md font-sans font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Contactar Ahora
              </button>
            </div>

            {/* Guarantee */}
            <div className="bg-navy-dark text-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="font-serif text-xl font-bold text-gold-accent mb-4">
                Nuestra Garantía
              </h3>
              <ul className="font-sans text-sm space-y-2 opacity-90">
                <li>✓ Asesoría jurídica especializada</li>
                <li>✓ Transparencia en todos los procesos</li>
                <li>✓ Cumplimiento de plazos establecidos</li>
                <li>✓ Seguimiento personalizado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;