'use client';

import Accordion from './Accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FAQSection() {
  const faqAnimation = useScrollAnimation({ threshold: 0.1 });
  const faqItems = [
    {
      title: '¿Cómo funciona Trivo University?',
      content: 'Programas prácticos para crear contenido, liderar y formar tu tribu de running, trekking o ciclismo.'
    },
    {
      title: '¿Qué cursos están disponibles?',
      content: 'Tres programas: Trail Running, Running y Ciclismo. Cada uno te enseña a crear contenido y liderar grupos.'
    },
    {
      title: '¿Necesito experiencia previa?',
      content: 'No. Nuestros programas están diseñados para empezar desde cero o mejorar tus habilidades de liderazgo.'
    },
    {
      title: '¿Cómo puedo convertirme en Embajador Trivo?',
      content: 'Completá nuestro programa y demostrá tu compromiso. Los embajadores convierten sus entrenamientos en aulas vivas.'
    },
    {
      title: '¿Qué beneficios obtengo al ser Embajador?',
      content: 'Acceso a círculo exclusivo, ser mentor de nuevos líderes y formar parte de una comunidad selecta.'
    },
    {
      title: '¿Los cursos son online o presenciales?',
      content: 'Combinan contenido online con prácticas en terreno real. El aula es la calle.'
    },
    {
      title: '¿Hay algún costo asociado?',
      content: 'Registrate en nuestra plataforma para conocer costos y planes disponibles.'
    },
    {
      title: '¿Puedo unirme a un club embajador existente?',
      content: 'Sí. Clubs como MV Adventure Team, Ómega Runners y Vibora Bike Team están abiertos a nuevos miembros.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 relative" style={{ background: 'linear-gradient(180deg, #0a1420 0%, #0d1725 100%)' }}>
      <div ref={faqAnimation.ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${faqAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <Accordion items={faqItems} sectionTitle="Preguntas Frecuentes" />
      </div>
    </section>
  );
}

