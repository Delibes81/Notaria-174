import React from 'react';
import { GraduationCap, Award, Scale, User } from 'lucide-react';

const NotaryProfile: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
            Mtro. Victor Rafael Aguilar Molina
          </h1>
          <p className="font-sans text-xl text-gold-accent font-medium">
            Notario Público 174 de la Ciudad de México
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Mtro. Victor Rafael Aguilar Molina"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-accent text-white p-6 rounded-lg shadow-lg">
                <p className="font-serif text-2xl font-bold">+30</p>
                <p className="font-sans text-sm">años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Personal Message */}
          <div className="animate-slide-up">
            <div className="bg-navy-dark text-white p-8 rounded-lg shadow-xl">
              <h2 className="font-serif text-2xl font-bold mb-6 text-gold-accent">
                Mensaje Personal
              </h2>
              <div className="space-y-4 font-sans leading-relaxed">
                <p>
                  "A lo largo de más de tres décadas ejerciendo el notariado, he tenido el privilegio 
                  de acompañar a miles de personas y familias en los momentos más importantes de sus vidas."
                </p>
                <p>
                  "Para mí, ser notario público trasciende el aspecto técnico del derecho; es una responsabilidad 
                  social que requiere de la máxima integridad, preparación constante y un compromiso genuino 
                  con el bienestar de quienes confían en nuestros servicios."
                </p>
                <p>
                  "Mi filosofía profesional se basa en tres pilares fundamentales: la honestidad en cada 
                  actuación, la rectitud en cada decisión y el profesionalismo en cada servicio que brindamos."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="animate-slide-up">
            <div className="bg-warm-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-gold-accent mr-4" />
                <h3 className="font-serif text-2xl font-bold text-navy-dark">
                  Formación Académica
                </h3>
              </div>
              <ul className="font-sans text-charcoal space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3"></div>
                  <span><strong>Maestría en Derecho</strong> - Universidad Nacional Autónoma de México</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3"></div>
                  <span><strong>Licenciatura en Derecho</strong> - Universidad Nacional Autónoma de México</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3"></div>
                  <span><strong>Especialización en Derecho Notarial</strong> - Colegio de Notarios de México</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-warm-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-gold-accent mr-4" />
                <h3 className="font-serif text-2xl font-bold text-navy-dark">
                  Reconocimientos
                </h3>
              </div>
              <ul className="font-sans text-charcoal space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3"></div>
                  <span><strong>Miembro Distinguido</strong> - Colegio de Notarios del Distrito Federal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3"></div>
                  <span><strong>Reconocimiento a la Excelencia</strong> - Cámara Nacional de Comercio</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3"></div>
                  <span><strong>Certificación en Actualización Normativa</strong> - Consejo General del Notariado Mexicano</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience & Expertise */}
        <div className="bg-navy-dark text-white rounded-lg p-8 lg:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Experiencia y Especialidades
            </h2>
            <p className="font-sans text-lg opacity-90 max-w-3xl mx-auto">
              Más de tres décadas de experiencia en el ejercicio notarial, 
              especializándose en diversas áreas del derecho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: 'Derecho Inmobiliario',
                description: 'Especialista en transacciones inmobiliarias, constitución de hipotecas y regularización de propiedades.'
              },
              {
                icon: User,
                title: 'Derecho Corporativo',
                description: 'Amplia experiencia en constitución de sociedades, fusiones, escisiones y actos mercantiles.'
              },
              {
                icon: Award,
                title: 'Derecho Familiar y Sucesorio',
                description: 'Experto en testamentos, sucesiones, capitulaciones matrimoniales y planificación patrimonial.'
              }
            ].map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gold-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-gold-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">
                    {expertise.title}
                  </h3>
                  <p className="font-sans opacity-90 leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-20 animate-fade-in">
          <blockquote className="font-serif text-2xl sm:text-3xl text-navy-dark italic font-medium max-w-4xl mx-auto leading-relaxed">
            "La función notarial no es solo un ejercicio técnico del derecho, 
            sino una misión de servicio público que requiere del más alto compromiso 
            ético y profesional."
          </blockquote>
          <p className="font-sans text-gold-accent font-bold mt-6 text-lg">
            - Mtro. Victor Rafael Aguilar Molina
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotaryProfile;