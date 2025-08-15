// src/components/Header.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [showIcon, setShowIcon] = useState(null);

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

  const handleClick = (elementId, iconType) => {
    setClickedElement(elementId);
    setShowIcon(iconType);
    setTimeout(() => {
      setClickedElement(null);
      setShowIcon(null);
    }, 1000);
  };

  const getIcon = (type) => {
    switch(type) {
      case 'home':
        return '🏠';
      case 'services':
        return '⚙️';
      case 'industries':
        return '🏭';
      case 'resources':
        return '📚';
      case 'lets-talk':
        return '📍';
      case 'hamburger':
        return '☰';
      default:
        return '';
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm text-white">
        <div className="text-2xl font-bold">TRENDY VIBES</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <Link 
            href="/" 
            className={`hover:text-gray-300 transition-all duration-300 ripple-effect relative ${clickedElement === 'home' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
            onClick={() => handleClick('home', 'home')}
          >
            Home
            {showIcon === 'home' && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                {getIcon('home')}
              </span>
            )}
          </Link> 
          <Link 
            href="/services" 
            className={`hover:text-gray-300 transition-all duration-300 ripple-effect relative ${clickedElement === 'services' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
            onClick={() => handleClick('services', 'services')}
          >
            Services
            {showIcon === 'services' && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                {getIcon('services')}
              </span>
            )}
          </Link>
          <Link 
            href="/industries" 
            className={`hover:text-gray-300 transition-all duration-300 ripple-effect relative ${clickedElement === 'industries' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
            onClick={() => handleClick('industries', 'industries')}
          >
            Industries
            {showIcon === 'industries' && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                {getIcon('industries')}
              </span>
            )}
          </Link>
          <Link 
            href="/resources" 
            className={`hover:text-gray-300 transition-all duration-300 ripple-effect relative ${clickedElement === 'resources' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
            onClick={() => handleClick('resources', 'resources')}
          >
            Resources
            {showIcon === 'resources' && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                {getIcon('resources')}
              </span>
            )}
          </Link>
          <Link 
            href="/lets-talk" 
            className={`hover:text-gray-300 transition-all duration-300 ripple-effect relative ${clickedElement === 'lets-talk' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
            onClick={() => handleClick('lets-talk', 'lets-talk')}
          >
            Let's Connect
            {showIcon === 'lets-talk' && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                {getIcon('lets-talk')}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden flex flex-col space-y-1 p-2 z-60 transition-all duration-300 ripple-effect relative ${clickedElement === 'hamburger' ? 'button-click-animation scale-95' : ''}`}
          onClick={() => {
            toggleMenu();
            handleClick('hamburger', 'hamburger');
          }}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          {showIcon === 'hamburger' && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
              {getIcon('hamburger')}
            </span>
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu - Separate from header */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
            <Link 
              href="/" 
              className={`text-2xl font-semibold text-white hover:text-purple-400 transition-all duration-300 ripple-effect relative ${clickedElement === 'mobile-home' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
              onClick={() => {
                closeMenu();
                handleClick('mobile-home', 'home');
              }}
            >
              Home
              {showIcon === 'home' && clickedElement === 'mobile-home' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                  {getIcon('home')}
                </span>
              )}
            </Link>
            <Link 
              href="/services" 
              className={`text-2xl font-semibold text-white hover:text-purple-400 transition-all duration-300 ripple-effect relative ${clickedElement === 'mobile-services' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
              onClick={() => {
                closeMenu();
                handleClick('mobile-services', 'services');
              }}
            >
              Services
              {showIcon === 'services' && clickedElement === 'mobile-services' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                  {getIcon('services')}
                </span>
              )}
            </Link>
            <Link 
              href="/industries" 
              className={`text-2xl font-semibold text-white hover:text-purple-400 transition-all duration-300 ripple-effect relative ${clickedElement === 'mobile-industries' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
              onClick={() => {
                closeMenu();
                handleClick('mobile-industries', 'industries');
              }}
            >
              Industries
              {showIcon === 'industries' && clickedElement === 'mobile-industries' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                  {getIcon('industries')}
                </span>
              )}
            </Link>
            <Link 
              href="/resources" 
              className={`text-2xl font-semibold text-white hover:text-purple-400 transition-all duration-300 ripple-effect relative ${clickedElement === 'mobile-resources' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
              onClick={() => {
                closeMenu();
                handleClick('mobile-resources', 'resources');
              }}
            >
              Resources
              {showIcon === 'resources' && clickedElement === 'mobile-resources' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                  {getIcon('resources')}
                </span>
              )}
            </Link>
            <Link 
              href="/lets-talk" 
              className={`text-2xl font-semibold text-white hover:text-purple-400 transition-all duration-300 ripple-effect relative ${clickedElement === 'mobile-lets-talk' ? 'button-click-animation text-purple-400 scale-95' : ''}`}
              onClick={() => {
                closeMenu();
                handleClick('mobile-lets-talk', 'lets-talk');
              }}
            >
              Let's Talk
              {showIcon === 'lets-talk' && clickedElement === 'mobile-lets-talk' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 icon-animation text-2xl">
                  {getIcon('lets-talk')}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
