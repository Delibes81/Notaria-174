import React from 'react';
import { Target, Eye, Award, Users, Building } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
            La Notaría Pública 174
          </h1>
          <p className="font-sans text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Una institución comprometida con la seguridad jurídica, 
            la transparencia y el servicio de excelencia en la Ciudad de México.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-up">
            <div className="bg-warm-white p-8 rounded-lg shadow-lg h-full">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-gold-accent mr-4" />
                <h2 className="font-serif text-2xl font-bold text-navy-dark">
                  Nuestra Misión
                </h2>
              </div>
              <p className="font-sans text-charcoal leading-relaxed text-lg">
                Brindar servicios notariales de la más alta calidad, garantizando la seguridad 
                jurídica de nuestros clientes a través de la aplicación rigurosa de la ley, 
                la honestidad en nuestras actuaciones y el compromiso permanente con la excelencia 
                profesional.
              </p>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-navy-dark text-white p-8 rounded-lg shadow-lg h-full">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-gold-accent mr-4" />
                <h2 className="font-serif text-2xl font-bold">
                  Nuestra Visión
                </h2>
              </div>
              <p className="font-sans leading-relaxed text-lg opacity-90">
                Ser reconocidos como la notaría de referencia en la Ciudad de México, 
                distinguiéndonos por nuestra integridad, innovación y capacidad para adaptarnos 
                a las necesidades cambiantes de nuestros clientes, siempre manteniendo los más 
                altos estándares éticos y profesionales.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-navy-dark text-center mb-12 animate-fade-in">
            Nuestros Valores Fundamentales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Honestidad y Rectitud',
                description: 'Actuamos con transparencia absoluta, manteniendo siempre la verdad como principio rector en todas nuestras actuaciones.'
              },
              {
                icon: Users,
                title: 'Profesionalismo',
                description: 'Nos comprometemos a brindar un servicio de excelencia, sustentado en la capacitación continua y la actualización constante.'
              },
              {
                icon: Building,
                title: 'Eficiencia y Trato Humano',
                description: 'Combinamos procesos eficientes con un trato cercano y personalizado, entendiendo las necesidades específicas de cada cliente.'
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gold-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-gold-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="font-sans text-charcoal leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History */}
        <div className="bg-warm-white rounded-lg p-8 lg:p-12 animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-navy-dark mb-8 text-center">
            Nuestra Historia
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="font-sans text-lg text-charcoal leading-relaxed mb-6">
              La <strong>Notaría Pública 174</strong> fue establecida con el compromiso firme de servir 
              a la comunidad de la Ciudad de México con los más altos estándares de calidad y ética profesional. 
              Desde nuestros inicios, hemos mantenido un enfoque centrado en la seguridad jurídica y la 
              protección del patrimonio de nuestros clientes.
            </p>
            
            <p className="font-sans text-lg text-charcoal leading-relaxed mb-6">
              A lo largo de los años, hemos sido testigos y partícipes de la evolución del sistema notarial 
              mexicano, adaptándonos continuamente a los cambios normativos y tecnológicos sin perder nunca 
              de vista nuestros valores fundamentales: la <strong className="text-gold-accent">honestidad</strong>, 
              la <strong className="text-gold-accent">rectitud</strong> y el 
              <strong className="text-gold-accent"> profesionalismo</strong>.
            </p>
            
            <p className="font-sans text-lg text-charcoal leading-relaxed">
              Hoy en día, bajo la dirección del <strong>Mtro. Victor Rafael Aguilar Molina</strong>, 
              continuamos consolidando nuestra posición como una de las notarías de mayor confianza en la 
              Ciudad de México, orgullosos de haber acompañado a miles de familias y empresas en sus 
              momentos más importantes, siempre con la certeza de brindar un servicio impecable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;