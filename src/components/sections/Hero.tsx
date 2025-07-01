import React from 'react';
import Button from '../ui/Button';
import bg from '../../assets/rig2.mp4'; // MP4 video background

const Hero = () => {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden text-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src={bg}
          autoPlay
          loop
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Text Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block animate-fade-in-up delay-[100ms]">
              Transforming Operations
            </span>
            <span className="block animate-fade-in-up delay-[300ms]">
              With{' '}
              <span className="bg-gradient-to-r from-sun-500 to-sun-700 bg-clip-text text-transparent">
                Excellence
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delayed">
            We provide smarter, more sustainable operations across the energy value chain.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-more-delayed">
            <a href="#contact">
              <Button variant="primary" size="lg">Contact Us</Button>
            </a>
            <a href="#about">
              <Button variant="primary" size="lg">Learn More</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
        <a href="#projects" className="text-white-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60" height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
