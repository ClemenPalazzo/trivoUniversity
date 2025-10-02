'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Trivo University Logo" 
              className="w-10 h-10"
            />
            <div className="flex items-baseline space-x-2">
              <span className="text-white font-bold text-2xl">Trivo</span>
              <span className="text-gray-300 font-medium text-2xl">UNIVERSITY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-500 transition-colors text-lg">
              Cursos
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors text-lg">
              Eventos
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors text-lg">
              Embajadores
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors text-lg">
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                Cursos
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                Eventos
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                Embajadores
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                Login
              </a>
            </nav>
          </div>
        )}
      </div>
      {/* Subtle separator line */}
      <div className="border-b border-gray-700"></div>
    </header>
  );
}
