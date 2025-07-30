import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Oficina profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark bg-opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-slide-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Notaría 174:
              <span className="block text-gold-accent">
                Certeza jurídica con tradición y modernidad
              </span>
            </h1>
            
            <p className="font-sans text-xl mb-8 leading-relaxed opacity-90">
              Guiados por la honestidad y rectitud del 
              <strong className="text-gold-accent"> Mtro. Victor Rafael Aguilar Molina</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-gold-accent text-white px-8 py-4 rounded-md font-sans font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Agendar una Cita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => onNavigate('services')}
                className="border-2 border-white text-white px-8 py-4 rounded-md font-sans font-semibold text-lg hover:bg-white hover:text-navy-dark transition-all duration-300"
              >
                Conocer Servicios
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-8 w-8 text-gold-accent mx-auto mb-2" />
                <p className="font-sans text-sm opacity-90">Confianza</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-gold-accent mx-auto mb-2" />
                <p className="font-sans text-sm opacity-90">Experiencia</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-gold-accent mx-auto mb-2" />
                <p className="font-sans text-sm opacity-90">Profesionalismo</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-2xl animate-fade-in">
            <h3 className="font-serif text-2xl font-bold text-navy-dark mb-6">
              Nuestra Ubicación
            </h3>
            
            <div className="space-y-4 text-charcoal font-sans">
              <p className="font-medium">
                <strong>Dirección:</strong><br />
                Ernesto Elorduy 48<br />
                Colonia Guadalupe Inn<br />
                Alcaldía Álvaro Obregón<br />
                C.P. 01020, Ciudad de México, CDMX
              </p>
              
              <p className="font-medium">
                <strong>Horarios de Atención:</strong><br />
                Lunes a Viernes: 9:00 - 18:00<br />
                Sábados: 9:00 - 14:00
              </p>
              
              <p className="font-medium">
                <strong>Teléfono:</strong><br />
                <a href="tel:5512345678" className="text-gold-accent hover:underline">
                  55 1234 5678
                </a>
              </p>
            </div>

            <button 
              onClick={() => onNavigate('contact')}
              className="w-full mt-6 bg-navy-dark text-white py-3 rounded-md font-sans font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Ver Mapa y Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;