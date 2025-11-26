'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-opacity-95' : ''
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(10, 20, 32, 0.95)' : '#0a1420',
        borderBottom: '1px solid #1e2a3a',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src="/images/logo.png" 
              alt="Trivo University Logo" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              style={{ border: 'none' }}
            />
            <div className="flex items-baseline space-x-2">
              <span className="font-bold text-2xl transition-colors duration-300 group-hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>Trivo</span>
              <span className="font-medium text-2xl" style={{ color: '#E8DCC0' }}>UNIVERSITY</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="#cursos" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-base font-medium hover:bg-[#1a2332] hover:text-[#C95100]" 
              style={{ color: '#FCF8ED' }}
            >
              Cursos
            </a>
            <a 
              href="#embajadores" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-base font-medium hover:bg-[#1a2332] hover:text-[#C95100]" 
              style={{ color: '#FCF8ED' }}
            >
              Embajadores
            </a>
            <a 
              href="#faq" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-base font-medium hover:bg-[#1a2332] hover:text-[#C95100]" 
              style={{ color: '#FCF8ED' }}
            >
              FAQ
            </a>
            <a 
              href="https://trivo-university-mvp.vercel.app/register" 
              className="ml-4 px-6 py-2 rounded-full transition-all duration-300 text-base font-semibold hover:scale-105 hover:shadow-lg" 
              style={{ backgroundColor: '#C95100', color: '#FFFFFF' }}
            >
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-[#1a2332]"
            style={{ color: '#FCF8ED' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 px-4 pt-2">
            <a 
              href="#cursos" 
              className="px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#1a2332] hover:text-[#C95100]" 
              style={{ color: '#FCF8ED' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </a>
            <a 
              href="#embajadores" 
              className="px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#1a2332] hover:text-[#C95100]" 
              style={{ color: '#FCF8ED' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Embajadores
            </a>
            <a 
              href="#faq" 
              className="px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#1a2332] hover:text-[#C95100]" 
              style={{ color: '#FCF8ED' }}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://trivo-university-mvp.vercel.app/register" 
              className="px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300 hover:opacity-90" 
              style={{ backgroundColor: '#C95100', color: '#FFFFFF' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
