'use client';

export default function LandingHero() {
  return (
    <div style={{ backgroundColor: '#0a1420' }}>
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ color: '#FCF8ED' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-up" style={{ animationDelay: '60ms' }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FCF8ED' }}>
                Convertite en Profe Trivo
              </h1>
              <p className="text-xl mb-10 leading-relaxed max-w-lg" style={{ color: '#F4E8D4' }}>
                La primera universidad deportiva donde aprendés a crear contenido, liderar y armar tu propia tribu de running, trekking o ciclismo.
              </p>
              <a 
                href="https://trivo-university-mvp.vercel.app/login"
                className="inline-block text-white font-semibold py-4 px-8 text-lg transition-base hover:opacity-90 hover:-translate-y-0.5 rounded-[50px]" 
                style={{ backgroundColor: '#C95100' }}
              >
                Empezar ahora
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-96 animate-fade-in" style={{ animationDelay: '120ms' }}>
                <img 
                  src="/images/prof.png" 
                  alt="Profesor Trivo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="pt-6 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-20 max-w-4xl" style={{ color: '#FCF8ED' }}>
              Formate con programas prácticos diseñados para crear tu grupo deportivo
            </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Trail Running Card */}
            <div className="p-4 text-center shadow-lg rounded-lg animate-fade-up transition-base hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a', animationDelay: '80ms' }}>
              <div className="w-full h-48 mb-4">
                <img 
                  src="/images/trail.png" 
                  alt="Trail Running - Corredor de montaña" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <a 
                href="#" 
                className="text-lg font-bold hover:text-[#C95100] transition-colors cursor-pointer inline-block"
                style={{ color: '#FCF8ED' }}
              >
                Trail Running
              </a>
            </div>

            {/* Running Card */}
            <div className="p-4 text-center shadow-lg rounded-lg animate-fade-up transition-base hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a', animationDelay: '140ms' }}>
              <div className="w-full h-48 mb-4">
                <img 
                  src="/images/Mujer.png" 
                  alt="Running - Corredora" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <a 
                href="#" 
                className="text-lg font-bold hover:text-[#C95100] transition-colors cursor-pointer inline-block"
                style={{ color: '#FCF8ED' }}
              >
                Running
              </a>
            </div>

            {/* Ciclismo Card */}
            <div className="p-4 text-center shadow-lg rounded-lg animate-fade-up transition-base hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a', animationDelay: '200ms' }}>
              <div className="w-full h-48 mb-4">
                <img 
                  src="/images/Ciclista.png" 
                  alt="Ciclismo - Ciclista" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <a 
                href="#" 
                className="text-lg font-bold hover:text-[#C95100] transition-colors cursor-pointer inline-block"
                style={{ color: '#FCF8ED' }}
              >
                Ciclismo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassadors Section */}
      <section className="py-16 px-4" style={{ color: '#FCF8ED' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl h-96 animate-fade-in" style={{ animationDelay: '80ms' }}>
                <img 
                  src="/images/embajador.png" 
                  alt="Embajador Trivo sosteniendo bandera" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="text-left animate-fade-up" style={{ animationDelay: '120ms' }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FCF8ED' }}>
                EMBAJADORES TRIVO
              </h1>
              <p className="text-xl mb-10 leading-relaxed max-w-lg" style={{ color: '#F4E8D4' }}>
                Convertí tus entrenamientos en aulas vivas y forma a la nueva generación de líderes deportivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: El aula es la calle */}
            <div className="p-8 text-center shadow-lg rounded-lg animate-fade-up transition-base hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a', animationDelay: '60ms' }}>
              <div className="w-16 h-16 mx-auto mb-6 border-2 rounded-lg flex items-center justify-center" style={{ borderColor: '#C95100' }}>
                <span className="font-bold text-2xl" style={{ color: '#C95100' }}>9</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FCF8ED' }}>
                El aula es la calle
              </h3>
              <p className="leading-relaxed" style={{ color: '#F4E8D4' }}>
                Tus sesiones son práctica en terreno real para nuevos profes.
              </p>
            </div>

            {/* Card 2: Mentores de la universidad */}
            <div className="p-8 text-center shadow-lg rounded-lg animate-fade-up transition-base hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a', animationDelay: '120ms' }}>
              <div className="w-16 h-16 mx-auto mb-6 border-2 rounded-lg flex items-center justify-center" style={{ borderColor: '#C95100' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C95100' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FCF8ED' }}>
                Mentores de la universidad
              </h3>
              <p className="leading-relaxed" style={{ color: '#F4E8D4' }}>
                Acompañas y guías a la próxima camada de líderes.
              </p>
            </div>

            {/* Card 3: Círculo exclusivo */}
            <div className="p-8 text-center shadow-lg rounded-lg animate-fade-up transition-base hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#1a2332', border: '1px solid #1e2a3a', animationDelay: '180ms' }}>
              <div className="w-16 h-16 mx-auto mb-6 border-2 rounded-lg flex items-center justify-center" style={{ borderColor: '#C95100' }}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#C95100' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FCF8ED' }}>
                Círculo exclusivo
              </h3>
              <p className="leading-relaxed" style={{ color: '#F4E8D4' }}>
                Sé parte de un grupo selecto de embajadores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
