import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const Trust: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Honestidad',
      description: 'Actuamos con transparencia absoluta en cada proceso, garantizando que nuestros clientes estén completamente informados.'
    },
    {
      icon: Award,
      title: 'Rectitud',
      description: 'Mantenemos los más altos estándares éticos y profesionales en todos nuestros actos notariales.'
    },
    {
      icon: Users,
      title: 'Profesionalismo',
      description: 'Contamos con un equipo altamente capacitado y actualizado en las últimas disposiciones legales.'
    },
    {
      icon: Clock,
      title: 'Trayectoria',
      description: 'Más de tres décadas brindando certeza jurídica con un historial impecable de servicio.'
    }
  ];

  return (
    <section className="py-20 bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Nuestra Propuesta de <span className="text-gold-accent">Valor</span>
          </h2>
          <p className="font-sans text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            La confianza se construye día a día. En la Notaría 174, nuestros valores fundamentales 
            son el cimiento sobre el cual hemos edificado una larga y respetada trayectoria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`text-center animate-slide-up group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gold-accent bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-accent group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <IconComponent className="h-10 w-10 text-gold-accent group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4">
                  {value.title}
                </h3>
                
                <p className="font-sans opacity-90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4 text-gold-accent">
              "La confianza es el fundamento de toda relación duradera"
            </h3>
            <p className="font-sans text-lg opacity-90 leading-relaxed">
              Por eso nos esforzamos cada día en mantener los más altos estándares de calidad, 
              integridad y excelencia en el servicio. Nuestros clientes no solo reciben asesoría jurídica; 
              reciben la tranquilidad de saber que sus intereses están en las mejores manos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;