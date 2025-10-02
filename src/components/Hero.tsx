export default function Hero() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and CTA */}
          <div className="text-left">
            {/* Torch Icon */}
            <div className="flex justify-center mb-8">
              <img 
                src="/images/antorcha.png" 
                alt="Antorcha Trivo University" 
                className="w-32 h-32"
              />
            </div>
            
            {/* Titles */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              EMBAJADORES
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              TRIVO
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Convertí tus entrenamientos en aulas vivas y forma a la nueva generación de líderes deportivos.
            </p>
            
            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Unirme como Embajador
            </button>
          </div>
          
          {/* Right side - Your Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-96">
              {/* Replace this with your actual image */}
              <img 
                src="/images/prof.png" 
                alt="Instructor enseñando a estudiantes" 
                className="w-full h-full object-cover rounded-lg"
              />
              
              {/* 
                INSTRUCCIONES PARA AGREGAR TU IMAGEN:
                
                1. Guarda la imagen que me pasaste en la carpeta 'public/' de tu proyecto
                2. Nombra la imagen (ej: 'instructor-students.jpg')
                3. Cambia el 'src' arriba por el nombre de tu imagen
                
                Ejemplo:
                <img 
                  src="/tu-imagen.jpg" 
                  alt="Instructor enseñando a estudiantes" 
                  className="w-full h-full object-cover rounded-lg"
                />
                
                O si prefieres usar Next.js Image (recomendado):
                
                import Image from 'next/image';
                
                <Image 
                  src="/tu-imagen.jpg" 
                  alt="Instructor enseñando a estudiantes" 
                  width={500}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
