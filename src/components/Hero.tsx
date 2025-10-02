export default function Hero() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start">
          <div className="max-w-4xl text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Domina las habilidades más buscadas del mercado laboral
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Encuentra cursos online de trail running, running, ciclismo y más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
