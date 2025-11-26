'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function LandingHero() {
  const heroTextAnimation = useScrollAnimation({ threshold: 0.2 });
  const heroImageAnimation = useScrollAnimation({ threshold: 0.2 });
  const coursesAnimation = useScrollAnimation({ threshold: 0.1 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.1 });
  const ambassadorsTextAnimation = useScrollAnimation({ threshold: 0.1 });
  const ambassadorsImageAnimation = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div style={{ backgroundColor: '#0a1420' }}>
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ color: '#FCF8ED', background: 'linear-gradient(180deg, #0a1420 0%, #0f1a28 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C95100] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C95100] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={heroTextAnimation.ref}
              className={`text-left transition-all duration-1000 ${heroTextAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FCF8ED' }}>
                Convertite en Profe Trivo
              </h1>
              <p className="text-xl mb-6 leading-relaxed max-w-lg" style={{ color: '#F4E8D4' }}>
                La primera universidad deportiva donde aprendés a crear contenido, liderar y armar tu propia tribu de running, trekking o ciclismo.
              </p>
              <div className="mb-10 space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg" style={{ color: '#F4E8D4' }}>Programas prácticos diseñados por expertos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg" style={{ color: '#F4E8D4' }}>Mentoreo personalizado de líderes deportivos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg" style={{ color: '#F4E8D4' }}>Acceso a una red exclusiva de embajadores</p>
                </div>
              </div>
              <a 
                href="https://trivo-university-mvp.vercel.app/login"
                className="inline-block text-white font-semibold py-4 px-8 text-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:scale-105 rounded-[50px] shadow-lg hover:shadow-xl" 
                style={{ backgroundColor: '#C95100' }}
              >
                Empezar ahora
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div 
                ref={heroImageAnimation.ref}
                className={`relative w-full max-w-lg h-96 transition-all duration-1000 ${heroImageAnimation.isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}
              >
                <img 
                  src="/images/prof.png" 
                  alt="Profesor Trivo" 
                  className="w-full h-full object-cover rounded-xl"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="pt-20 pb-24 px-6 relative" style={{ background: 'linear-gradient(180deg, #0f1a28 0%, #121d2e 100%)' }}>
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-6 max-w-4xl" style={{ color: '#FCF8ED' }}>
                Formate con programas prácticos diseñados para crear tu grupo deportivo
              </h2>
              <p className="text-lg text-left max-w-4xl leading-relaxed" style={{ color: '#F4E8D4' }}>
                Descubrí nuestros programas especializados en Trail Running, Running y Ciclismo. Cada curso está diseñado para darte las herramientas necesarias para liderar, crear contenido de calidad y formar comunidades deportivas exitosas.
              </p>
            </div>
          <div ref={coursesAnimation.ref} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${coursesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Trail Running Card */}
            <div className="group p-6 text-center shadow-2xl rounded-2xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/10 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src="/images/trail.png" 
                    alt="Trail Running - Corredor de montaña" 
                    className="w-full h-full object-contain rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{ border: 'none' }}
                  />
                </div>
                <a 
                  href="#" 
                  className="text-lg font-bold hover:text-[#C95100] transition-all duration-300 cursor-pointer inline-block relative group/link"
                  style={{ color: '#FCF8ED' }}
                >
                  <span className="relative z-10 inline-block">Trail Running</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C95100] transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </div>
            </div>

            {/* Running Card */}
            <div className="group p-6 text-center shadow-2xl rounded-2xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/10 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src="/images/Mujer.png" 
                    alt="Running - Corredora" 
                    className="w-full h-full object-contain rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{ border: 'none' }}
                  />
                </div>
                <a 
                  href="#" 
                  className="text-lg font-bold hover:text-[#C95100] transition-all duration-300 cursor-pointer inline-block relative group/link"
                  style={{ color: '#FCF8ED' }}
                >
                  <span className="relative z-10 inline-block">Running</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C95100] transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </div>
            </div>

            {/* Ciclismo Card */}
            <div className="group p-6 text-center shadow-2xl rounded-2xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/10 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src="/images/Ciclista.png" 
                    alt="Ciclismo - Ciclista" 
                    className="w-full h-full object-contain rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{ border: 'none' }}
                  />
                </div>
                <a 
                  href="#" 
                  className="text-lg font-bold hover:text-[#C95100] transition-all duration-300 cursor-pointer inline-block relative group/link"
                  style={{ color: '#FCF8ED' }}
                >
                  <span className="relative z-10 inline-block">Ciclismo</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C95100] transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassadors Section */}
      <section id="embajadores" className="py-24 px-4 relative" style={{ color: '#FCF8ED', background: 'linear-gradient(180deg, #121d2e 0%, #0a1420 100%)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Primera fila: Título y subtítulo al lado de la imagen */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Imagen con animación */}
            <div className="flex flex-col justify-start">
              <div 
                ref={ambassadorsImageAnimation.ref}
                className={`relative w-full max-w-xl mx-auto lg:mx-0 transition-all duration-1000 ${ambassadorsImageAnimation.isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'}`}
              >
                <img 
                  src="/images/embajador.png" 
                  alt="Embajador Trivo sosteniendo bandera" 
                  className="w-full h-auto object-contain rounded-xl"
                  style={{ maxHeight: '500px', border: 'none' }}
                />
              </div>
            </div>
            
            {/* Título y subtítulo */}
            <div 
              ref={ambassadorsTextAnimation.ref}
              className={`text-left flex flex-col justify-start transition-all duration-1000 ${ambassadorsTextAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FCF8ED' }}>
                EMBAJADORES TRIVO
              </h1>
              
              <p className="text-xl md:text-2xl mb-6 leading-relaxed font-semibold" style={{ color: '#F4E8D4' }}>
                Convertí tus entrenamientos en aulas vivas y forma a la nueva generación de líderes deportivos.
              </p>
              
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(26, 35, 50, 0.5)', border: '1px solid rgba(201, 81, 0, 0.2)' }}>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#E8DCC0' }}>
                  Los <strong style={{ color: '#FCF8ED' }}>Embajadores Trivo</strong> son líderes deportivos experimentados que transforman cada sesión de entrenamiento en una oportunidad de aprendizaje real. Cuando te convertís en Embajador, no solo seguís practicando tu deporte favorito, sino que tu experiencia se convierte en el aula donde nuevos profesores aprenden en terreno real.
                </p>
              </div>
            </div>
          </div>
          
          {/* Segunda fila: Beneficios y contenido final alineados con la imagen */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Columna izquierda: Contenedor con información debajo de la imagen */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <div className="p-6 rounded-xl shadow-xl" style={{ backgroundColor: 'rgba(26, 35, 50, 0.6)', border: '1px solid rgba(201, 81, 0, 0.3)' }}>
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#FCF8ED' }}>
                    ¿Qué obtienes?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 81, 0, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: '#FCF8ED' }}>Certificación oficial</p>
                        <p className="text-sm" style={{ color: '#E8DCC0' }}>Reconocimiento como Embajador</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 81, 0, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: '#FCF8ED' }}>Red exclusiva</p>
                        <p className="text-sm" style={{ color: '#E8DCC0' }}>Acceso a comunidad premium</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 81, 0, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: '#FCF8ED' }}>Recursos exclusivos</p>
                        <p className="text-sm" style={{ color: '#E8DCC0' }}>Materiales y herramientas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 81, 0, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: '#FCF8ED' }}>Desarrollo continuo</p>
                        <p className="text-sm" style={{ color: '#E8DCC0' }}>Crecimiento profesional</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Estadísticas o números destacados */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl text-center" style={{ backgroundColor: 'rgba(201, 81, 0, 0.1)', border: '1px solid rgba(201, 81, 0, 0.2)' }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#C95100' }}>100+</div>
                    <div className="text-sm" style={{ color: '#E8DCC0' }}>Embajadores activos</div>
                  </div>
                  <div className="p-5 rounded-xl text-center" style={{ backgroundColor: 'rgba(201, 81, 0, 0.1)', border: '1px solid rgba(201, 81, 0, 0.2)' }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#C95100' }}>50+</div>
                    <div className="text-sm" style={{ color: '#E8DCC0' }}>Ciudades</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Columna derecha: Beneficios y contenido final */}
            <div className="flex flex-col space-y-8">
              <div className="space-y-5">
                <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex-shrink-0 mt-1 p-2 rounded-lg" style={{ backgroundColor: 'rgba(201, 81, 0, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#FCF8ED' }}>El aula es la calle</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#E8DCC0' }}>
                      Tus entrenamientos se convierten en prácticas en vivo donde nuevos profesores observan, aprenden y aplican técnicas reales en terreno.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex-shrink-0 mt-1 p-2 rounded-lg" style={{ backgroundColor: 'rgba(201, 81, 0, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#FCF8ED' }}>Mentoreo activo</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#E8DCC0' }}>
                      Acompañás y guiás a la próxima camada de líderes, compartiendo tu experiencia, metodologías y secretos del oficio.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex-shrink-0 mt-1 p-2 rounded-lg" style={{ backgroundColor: 'rgba(201, 81, 0, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#FCF8ED' }}>Círculo exclusivo</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#E8DCC0' }}>
                      Formás parte de una red selecta de embajadores reconocidos, con acceso a eventos exclusivos, recursos premium y networking de alto nivel.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
                  <div className="flex-shrink-0 mt-1 p-2 rounded-lg" style={{ backgroundColor: 'rgba(201, 81, 0, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#FCF8ED' }}>Impacto real</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#E8DCC0' }}>
                      Tu legado se multiplica. Cada embajador que formás impacta directamente en cientos de deportistas, creando una comunidad más fuerte y conectada.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-5 rounded-xl" style={{ backgroundColor: 'rgba(201, 81, 0, 0.05)', border: '1px solid rgba(201, 81, 0, 0.2)' }}>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#E8DCC0' }}>
                  Si tenés años de experiencia liderando grupos de running, trail running, ciclismo o trekking, y querés que tu conocimiento trascienda mientras seguís creciendo profesionalmente, el programa de Embajadores Trivo está diseñado para vos.
                </p>
              </div>
              
              <div className="border-l-4 pl-6 py-4 rounded-r-lg animate-fade-up" style={{ borderColor: '#C95100', backgroundColor: 'rgba(201, 81, 0, 0.05)', animationDelay: '500ms' }}>
                <p className="text-lg md:text-xl italic leading-relaxed font-medium" style={{ color: '#C95100' }}>
                  "No solo entrenamos, formamos líderes. Cada sesión es una oportunidad de enseñar y aprender."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 relative" style={{ background: 'linear-gradient(180deg, #0a1420 0%, #0d1725 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#FCF8ED' }}>
            ¿Por qué elegir Trivo University?
          </h2>
          <div ref={benefitsAnimation.ref} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Card 1: El aula es la calle */}
            <div className="group p-8 text-center shadow-2xl rounded-xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#C95100] group-hover:shadow-lg group-hover:shadow-[#C95100]/50" style={{ borderColor: '#C95100' }}>
                  <span className="font-bold text-2xl transition-colors duration-300" style={{ color: '#C95100' }}>9</span>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                  El aula es la calle
                </h3>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                  Tus sesiones son práctica en terreno real para nuevos profes.
                </p>
              </div>
            </div>

            {/* Card 2: Mentores de la universidad */}
            <div className="group p-8 text-center shadow-2xl rounded-xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#C95100] group-hover:shadow-lg group-hover:shadow-[#C95100]/50" style={{ borderColor: '#C95100' }}>
                  <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C95100' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                  Mentores de la universidad
                </h3>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                  Acompañas y guías a la próxima camada de líderes.
                </p>
              </div>
            </div>

            {/* Card 3: Círculo exclusivo */}
            <div className="group p-8 text-center shadow-2xl rounded-xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#C95100] group-hover:shadow-lg group-hover:shadow-[#C95100]/50" style={{ borderColor: '#C95100' }}>
                  <svg className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#C95100' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                  Círculo exclusivo
                </h3>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                  Sé parte de un grupo selecto de embajadores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
