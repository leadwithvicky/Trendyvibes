// src/components/Header.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm text-white">
        <div className="text-2xl font-bold">TRENDY VIBES</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link> 
          <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/industries" className="hover:text-gray-300 transition-colors">Industries</Link>
          <Link href="/resources" className="hover:text-gray-300 transition-colors">Resources</Link>
          <Link href="/lets-talk" className="hover:text-gray-300 transition-colors">Let's Connect</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1 p-2 z-60"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Navigation Menu - Separate from header */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
            <Link 
              href="/" 
              className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="/industries" 
              className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Industries
            </Link>
            <Link 
              href="/resources" 
              className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Resources
            </Link>
            <Link 
              href="/lets-talk" 
              className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
