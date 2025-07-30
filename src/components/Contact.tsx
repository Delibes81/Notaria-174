import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
            Contacto
          </h1>
          <p className="font-sans text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para atenderle. Contáctenos para agendar una cita 
            o resolver cualquier duda sobre nuestros servicios notariales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-warm-white p-8 rounded-lg shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-navy-dark mb-6">
                Envíenos un Mensaje
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="font-sans text-charcoal">
                    Nos pondremos en contacto con usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-sans font-medium text-charcoal mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-accent focus:border-transparent font-sans"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block font-sans font-medium text-charcoal mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-accent focus:border-transparent font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans font-medium text-charcoal mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-accent focus:border-transparent font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-sans font-medium text-charcoal mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-accent focus:border-transparent font-sans"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="inmobiliario">Derecho Inmobiliario</option>
                      <option value="corporativo">Derecho Corporativo</option>
                      <option value="familiar">Derecho Familiar y Sucesorio</option>
                      <option value="civil">Actos Civiles</option>
                      <option value="consulta">Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans font-medium text-charcoal mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describa brevemente su consulta o necesidad..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-accent focus:border-transparent font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy-dark text-white py-4 rounded-md font-sans font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-navy-dark text-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 text-gold-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Dirección</h3>
                    <p className="font-sans leading-relaxed opacity-90">
                      Ernesto Elorduy 48<br />
                      Colonia Guadalupe Inn<br />
                      Alcaldía Álvaro Obregón<br />
                      C.P. 01020, Ciudad de México, CDMX
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-warm-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-gold-accent mr-4" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy-dark">Teléfono</h3>
                      <a 
                        href="tel:5512345678" 
                        className="font-sans text-charcoal hover:text-gold-accent transition-colors"
                      >
                        55 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-gold-accent mr-4" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy-dark">Correo</h3>
                      <a 
                        href="mailto:contacto@notaria174.mx" 
                        className="font-sans text-charcoal hover:text-gold-accent transition-colors"
                      >
                        contacto@notaria174.mx
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-gold-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy-dark mb-2">Horarios</h3>
                      <div className="font-sans text-charcoal space-y-1">
                        <p><strong>Lunes a Viernes:</strong> 9:00 - 18:00</p>
                        <p><strong>Sábados:</strong> 9:00 - 14:00</p>
                        <p><strong>Domingos:</strong> Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gold-accent text-white p-6 rounded-lg shadow-lg">
                <h3 className="font-serif text-lg font-bold mb-2">
                  Atención de Emergencia
                </h3>
                <p className="font-sans text-sm mb-3 opacity-90">
                  Para casos urgentes fuera del horario normal:
                </p>
                <a 
                  href="tel:5587654321" 
                  className="font-sans font-bold text-lg hover:underline"
                >
                  55 8765 4321
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-warm-white p-4 rounded-lg shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-navy-dark mb-4 text-center">
              Ubicación
            </h2>
            <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold-accent mx-auto mb-4" />
                <p className="font-sans text-charcoal">
                  Mapa interactivo<br />
                  <span className="text-sm opacity-70">
                    Ernesto Elorduy 48, Guadalupe Inn<br />
                    Álvaro Obregón, 01020 CDMX
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-sans text-sm text-charcoal">
                <strong>Facilidades de estacionamiento disponibles</strong><br />
                Acceso por transporte público: Estación San Antonio (Línea 7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;