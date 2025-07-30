import React, { useState } from 'react';
import { Menu, X, Scale, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: 'home' },
    { name: 'La Notaría', href: 'about' },
    { name: 'El Notario', href: 'notary' },
    { name: 'Servicios', href: 'services' },
    { name: 'Contacto', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <Scale className="h-8 w-8 text-gold-accent mr-3" />
            <div>
              <h1 className="font-serif text-xl font-bold text-navy-dark">
                Notaría Pública 174
              </h1>
              <p className="text-xs text-charcoal font-sans">Ciudad de México</p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-charcoal">
              <Phone className="h-4 w-4 mr-2 text-gold-accent" />
              <span className="font-sans text-sm">55 1234 5678</span>
            </div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-gold-accent text-white px-6 py-2 rounded-md font-sans font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Agendar Cita
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-sans font-medium transition-colors duration-300 ${
                  currentPage === item.href
                    ? 'text-gold-accent border-b-2 border-gold-accent pb-1'
                    : 'text-charcoal hover:text-gold-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-gold-accent p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-sans font-medium text-left py-2 transition-colors duration-300 ${
                    currentPage === item.href
                      ? 'text-gold-accent border-l-4 border-gold-accent pl-4'
                      : 'text-charcoal hover:text-gold-accent pl-4'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t pt-4 pl-4">
                <div className="flex items-center text-charcoal mb-3">
                  <Phone className="h-4 w-4 mr-2 text-gold-accent" />
                  <span className="font-sans text-sm">55 1234 5678</span>
                </div>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="bg-gold-accent text-white px-6 py-2 rounded-md font-sans font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Agendar Cita
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;