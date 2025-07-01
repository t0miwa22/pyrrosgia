import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../assets/py.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white-500 text-gray-700 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
          <img 
          src={logo}
          alt="Pyrros Gaia Logo" 
          className="h-12 mb-6"/>

            <div className="flex space-x-4">
              <a href="https://x.com/pyrrosgaia" className="text-gray-700 hover:text-flame-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/pyrrosgaia-oil-services" className="text-gray-700 hover:text-flame-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-500 hover:text-flame-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-flame-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-flame-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-navy-500 shrink-0 mt-1" />
                <span className="text-gray-500">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-navy-500 shrink-0" />
                <span className="text-gray-500">+2347048000703</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-navy-500 shrink-0" />
                <span className="text-gray-500">adetomiwa@pyrrosgaiaoilservices.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-400 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Pyrrosgaia Oil Services. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
