import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            <img 
              src="/src/assets/logo.png" 
              alt="Tech Affairs Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-600">
              Tech Affairs
            </h1>
            <p className="text-xs md:text-sm text-gray-600">
              & Innovative Hub
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <a 
              href="#home" 
              className="text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="hidden lg:block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get Started
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden flex flex-col gap-1.5 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-gray-800 transition-all block ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-gray-800 transition-all block ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-gray-800 transition-all block ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 px-6 py-4 bg-gray-50 border-t">
          <li>
            <a 
              href="#home" 
              onClick={closeMenu}
              className="block text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={closeMenu}
              className="block text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={closeMenu}
              className="block text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block text-gray-800 font-medium hover:text-brand-600 transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-brand-700 transition-colors"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}