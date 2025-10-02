'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-white font-semibold text-xl">Trivo</span>
              <span className="text-gray-400 text-sm">UNIVERSITY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-500 transition-colors">
              Cursos
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors">
              Eventos
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors">
              Nosotros
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
                Nosotros
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
