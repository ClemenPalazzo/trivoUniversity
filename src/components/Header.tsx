'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a1420]" style={{ backgroundColor: '#0a1420', color: '#FCF8ED' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a1420]" style={{ backgroundColor: '#0a1420' }}>
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Trivo University Logo" 
              className="w-10 h-10"
            />
            <div className="flex items-baseline space-x-2">
              <span className="font-bold text-2xl" style={{ color: '#FCF8ED' }}>Trivo</span>
              <span className="font-medium text-2xl" style={{ color: '#E8DCC0' }}>UNIVERSITY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cursos" className="transition-colors text-lg hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
              Cursos
            </a>
            <a href="#embajadores" className="transition-colors text-lg hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
              Embajadores
            </a>
            <a href="https://trivo-university-mvp.vercel.app/register" className="transition-colors text-lg hover:text-[#C95100]" style={{ color: '#F4E8D4' }}>
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-colors"
            style={{ color: '#FCF8ED' }}
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
          <div className="md:hidden pb-4 bg-[#1a2332]" style={{ backgroundColor: '#1a2332' }}>
            <nav className="flex flex-col space-y-4 px-4 pt-4">
              <a href="#cursos" className="transition-colors hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                Cursos
              </a>
              <a href="#embajadores" className="transition-colors hover:text-[#C95100]" style={{ color: '#FCF8ED' }}>
                Embajadores
              </a>
              <a href="https://trivo-university-mvp.vercel.app/register" className="transition-colors hover:text-[#C95100]" style={{ color: '#F4E8D4' }}>
                Login
              </a>
            </nav>
          </div>
        )}
      </div>
      <div style={{ borderBottom: '1px solid #1e2a3a' }}></div>
    </header>
  );
}
