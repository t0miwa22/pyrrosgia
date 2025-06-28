import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import logo from '../../assets/py.png'


const navLinks = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-10 w-15" />
                </a>
                </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`text-sm font-medium transition-colors hover:text-flame-500 ${
                  isScrolled ? 'text-navy-500' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded bg-navy-500 text-white hover:bg-navy-600 shadow-md text-sm px-4 py-2"
            >
              Contact Us
            </a>
          </nav>

          <button
            className="md:hidden text-navy-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button></div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-navy-500 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded bg-navy-500 text-white hover:bg-navy-600 shadow-md text-sm px-4 py-2 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;