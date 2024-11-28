import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-500">
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#cv">CV</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#cv" onClick={() => setIsMenuOpen(false)}>
                CV
              </MobileNavLink>
              <MobileNavLink href="#resume" onClick={() => setIsMenuOpen(false)}>
                Resume
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-500 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-500 transition-colors block py-2"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;