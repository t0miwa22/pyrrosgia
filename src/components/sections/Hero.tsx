import React from 'react';
import Button from '../ui/Button';
import bg from '../../assets/oil-rig-at-night.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* Banner Image */}
      <div className="h-80 md:h-80 w-full relative overflow-hidden">
        <img
          src={bg}
          alt="Offshore oil rig"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Text Block */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-700 leading-tight mb-6">
          <span className="block animate-fade-in-up delay-[100ms]">Transforming Operations</span>
          <span className="block animate-fade-in-up delay-[300ms]">With <span className="bg-gradient-to-r from-navy-500 to-sun-700 bg-clip-text text-transparent">
  Excellence
</span>
</span></h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delayed">
            We deliver smarter, more sustainable operations across the energy value chain
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-more-delayed">
            <a href="#contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-navy-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
      <div className="w-100 h-0.5 bg-sun-600 mx-auto mt-4 rounded" />
    </section>


  
  );
};

export default Hero;
