'use client';

import Accordion from './Accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturesSection() {
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresItems = [
    {
      title: 'Aprendizaje Práctico en Terreno Real',
      content: 'Aprendés creando contenido real, liderando grupos y formando comunidades. El aula es la calle.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Mentoreo Personalizado',
      content: 'Mentores experimentados te guían en cada paso con feedback personalizado y estrategias adaptadas.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      )
    },
    {
      title: 'Certificación y Reconocimiento',
      content: 'Obtené una certificación que valida tus habilidades y formá parte del círculo de Embajadores Trivo.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: 'Herramientas y Recursos Digitales',
      content: 'Plataforma completa con recursos, plantillas y herramientas para gestionar tu comunidad.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 17L12 22L22 17" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12L12 17L22 12" />
        </svg>
      )
    },
    {
      title: 'Red de Comunidades',
      content: 'Conectá con otros líderes deportivos y formá parte de una red nacional de comunidades.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Crecimiento Continuo',
      content: 'Accedé a actualizaciones constantes, webinars exclusivos y desarrollo profesional continuo.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="caracteristicas" className="py-24 px-6 relative" style={{ background: 'linear-gradient(180deg, #0d1725 0%, #101a2a 100%)' }}>
      <div ref={featuresAnimation.ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${featuresAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <Accordion items={featuresItems} sectionTitle="Características del Programa" />
      </div>
    </section>
  );
}

