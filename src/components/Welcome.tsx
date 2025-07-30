import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Mtro. Victor Rafael Aguilar Molina"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold-accent text-white p-4 rounded-lg shadow-lg">
              <p className="font-serif text-lg font-bold">+30 años</p>
              <p className="font-sans text-sm">de experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-dark mb-6">
              Mensaje de Bienvenida
            </h2>
            
            <div className="space-y-6 text-charcoal font-sans text-lg leading-relaxed">
              <p>
                "En la <strong>Notaría Pública 174</strong>, nos enorgullecemos de brindar servicios notariales de la más alta calidad, respaldados por décadas de experiencia y un compromiso inquebrantable con la honestidad y la rectitud."
              </p>
              
              <p>
                "Nuestro objetivo es ofrecer <strong>certeza jurídica</strong> a cada uno de nuestros clientes, combinando la tradición notarial mexicana con las herramientas y métodos más modernos para garantizar que cada acto que realizamos sea impecable."
              </p>
              
              <p>
                "La confianza que han depositado en nosotros miles de familias y empresas a lo largo de los años es nuestro mayor tesoro, y trabajamos cada día para mantenerla y fortalecerla."
              </p>
              
              <div className="pt-4">
                <p className="font-bold text-navy-dark">
                  Mtro. Victor Rafael Aguilar Molina
                </p>
                <p className="text-gold-accent font-medium">
                  Notario Público 174, Ciudad de México
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;