import React from 'react';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Inicio', href: 'home' },
    { name: 'La Notaría', href: 'about' },
    { name: 'El Notario', href: 'notary' },
    { name: 'Servicios', href: 'services' },
    { name: 'Contacto', href: 'contact' },
  ];

  const services = [
    'Derecho Inmobiliario',
    'Derecho Corporativo',
    'Derecho Familiar',
    'Actos Civiles'
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-gold-accent mr-3" />
              <div>
                <h3 className="font-serif text-xl font-bold">
                  Notaría Pública 174
                </h3>
                <p className="text-sm opacity-90">Ciudad de México</p>
              </div>
            </div>
            
            <p className="font-sans text-sm opacity-90 leading-relaxed mb-6 max-w-md">
              Más de tres décadas brindando servicios notariales de la más alta calidad, 
              con honestidad, rectitud y profesionalismo. Su confianza es nuestro mayor compromiso.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gold-accent mr-3" />
                <span className="font-sans text-sm opacity-90">
                  Ernesto Elorduy 48, Guadalupe Inn, Álvaro Obregón, 01020 CDMX
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gold-accent mr-3" />
                <span className="font-sans text-sm opacity-90">55 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gold-accent mr-3" />
                <span className="font-sans text-sm opacity-90">contacto@notaria174.mx</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold-accent">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.href)}
                    className="font-sans text-sm opacity-90 hover:text-gold-accent hover:opacity-100 transition-colors duration-300 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold-accent">
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-sans text-sm opacity-90">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="font-sans text-sm opacity-90">
                © {currentYear} Notaría Pública 174 de la Ciudad de México. Todos los derechos reservados.
              </p>
              <p className="font-sans text-xs opacity-70 mt-1">
                Mtro. Victor Rafael Aguilar Molina - Notario Público 174
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gold-accent hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gold-accent hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gold-accent hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;