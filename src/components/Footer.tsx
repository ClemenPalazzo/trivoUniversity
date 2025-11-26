'use client';

export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#0a1420', color: '#FCF8ED' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Trivo University Logo" 
                className="w-8 h-8"
                style={{ border: 'none' }}
              />
              <div className="flex items-baseline space-x-1">
                <span className="font-bold text-lg" style={{ color: '#FCF8ED' }}>Trivo</span>
                <span className="font-medium text-lg" style={{ color: '#E8DCC0' }}>UNIVERSITY</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#E8DCC0' }}>
              La primera universidad deportiva donde aprendés a crear contenido, liderar y armar tu propia tribu de running, trekking o ciclismo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FCF8ED' }}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-[#C95100] transition-colors" style={{ color: '#E8DCC0' }}>
                  Cursos Disponibles
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C95100] transition-colors" style={{ color: '#E8DCC0' }}>
                  Eventos Próximos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C95100] transition-colors" style={{ color: '#E8DCC0' }}>
                  Embajadores
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C95100] transition-colors" style={{ color: '#E8DCC0' }}>
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C95100] transition-colors" style={{ color: '#E8DCC0' }}>
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FCF8ED' }}>
              Contacto
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: '#E8DCC0' }}>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>rafaelcanevaroutn@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C95100' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FCF8ED' }}>
              Síguenos
            </h3>
            <p className="text-sm mb-4" style={{ color: '#E8DCC0' }}>
              Mantente al día con nuestras últimas noticias y eventos
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/trivo.ar/" 
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#C95100' }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a 
                href="https://ar.linkedin.com/company/klubo-outdoors?trk=public_profile_topcard-current-company" 
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#C95100' }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8" style={{ borderColor: '#1e2a3a' }}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm" style={{ color: '#E8DCC0' }}>
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Trivo University. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#C95100] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-[#C95100] transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-[#C95100] transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

