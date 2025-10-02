export default function CoursesSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: El aula es la calle */}
          <div className="bg-neutral-950 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-orange-500 font-bold text-2xl">9</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              El aula es la calle
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Tus sesiones son práctica en terreno real para nuevos profes.
            </p>
          </div>

          {/* Card 2: Mentores de la universidad */}
          <div className="bg-neutral-950 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Mentores de la universidad
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Acompañas y guías a la próxima camada de líderes.
            </p>
          </div>

          {/* Card 3: Círculo exclusivo */}
          <div className="bg-neutral-950 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Círculo exclusivo
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Sé parte de un grupo selecto de embajadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}