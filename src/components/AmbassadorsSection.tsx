'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AmbassadorsSection() {
  const ambassadorsAnimation = useScrollAnimation({ threshold: 0.1 });
  const clubsAnimation = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div style={{ backgroundColor: '#0d1725' }}>
      {/* Benefits Section */}
      <section id="embajadores" className="py-24 px-6 relative" style={{ background: 'linear-gradient(180deg, #0d1725 0%, #101a2a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={ambassadorsAnimation.ref} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${ambassadorsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Card 1: El aula es la calle */}
            <div className="group p-8 text-center shadow-2xl rounded-xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#C95100] group-hover:shadow-lg group-hover:shadow-[#C95100]/50" style={{ borderColor: '#C95100' }}>
                  <svg className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" style={{ color: '#C95100' }}>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                  El aula es la calle
                </h3>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                  Tus entrenamientos son prácticas en vivo para nuevos profes.
                </p>
              </div>
            </div>

            {/* Card 2: Mentores de la Universidad */}
            <div className="group p-8 text-center shadow-2xl rounded-xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#C95100] group-hover:shadow-lg group-hover:shadow-[#C95100]/50" style={{ borderColor: '#C95100' }}>
                  <svg className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" style={{ color: '#C95100' }}>
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                  Mentores de la Universidad
                </h3>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                  Ayuda a formar líderes con tu experiencia real.
                </p>
              </div>
            </div>

            {/* Card 3: Círculo exclusivo */}
            <div className="group p-8 text-center shadow-2xl rounded-xl card-hover-effect relative overflow-hidden" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#C95100] group-hover:shadow-lg group-hover:shadow-[#C95100]/50" style={{ borderColor: '#C95100' }}>
                  <svg className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" style={{ color: '#C95100' }}>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                  Círculo exclusivo
                </h3>
                <p className="leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                  Accede a un rol único dentro de Trivo University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Embajadores Section */}
      <section className="py-24 px-6 relative" style={{ background: 'linear-gradient(180deg, #101a2a 0%, #0a1420 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#FCF8ED' }}>
            Clubs Embajadores
          </h2>
          <div ref={clubsAnimation.ref} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${clubsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Club 1: MV Adventure Team */}
            <div className="group p-6 shadow-2xl relative rounded-2xl card-hover-effect overflow-hidden min-h-[200px] flex flex-col" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="text-left mb-4">
                    <div className="text-4xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>MV</div>
                    <div className="text-sm font-semibold uppercase tracking-wide transition-colors duration-300 mb-3" style={{ color: '#F4E8D4' }}>ADVENTURE TEAM</div>
                  </div>
                  <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                    Club de trail y aventuras outdoor en Tucumán. Expertos en montaña.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex justify-end">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 24 24" aria-label="Flag icon">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Club 2: Ómega Runners */}
            <div className="group p-6 shadow-2xl relative rounded-2xl card-hover-effect overflow-hidden min-h-[200px] flex flex-col" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="text-left mb-4">
                    <div className="text-3xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>ÓMEGA</div>
                    <div className="text-xs font-medium uppercase tracking-wide transition-colors duration-300 mb-3" style={{ color: '#F4E8D4' }}>- RUNNERS -</div>
                  </div>
                  <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                    Running team con base en Tucumán, especializados en distancias largas.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex justify-end">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 24 24" aria-label="Flag icon">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Club 3: Vibora Bike Team */}
            <div className="group p-6 shadow-2xl relative rounded-2xl card-hover-effect overflow-hidden min-h-[200px] flex flex-col" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C95100]/0 via-[#C95100]/5 to-[#C95100]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C95100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="text-left mb-4">
                    <div className="text-3xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>VIBORA</div>
                    <div className="text-xs font-medium uppercase tracking-wide transition-colors duration-300 mb-3" style={{ color: '#F4E8D4' }}>STREETBIKE</div>
                  </div>
                  <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: '#F4E8D4' }}>
                    Club de ciclismo con entrenamientos grupales y rutas desafiantes.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex justify-end">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <svg className="w-6 h-6" style={{ color: '#C95100' }} fill="currentColor" viewBox="0 0 24 24" aria-label="Flag icon">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
