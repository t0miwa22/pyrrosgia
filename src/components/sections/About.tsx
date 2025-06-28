import React from 'react';
import Container from '../ui/Container';
import 'swiper/css';
import 'swiper/css/autoplay';
import partner from '../../assets/gankco-logo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const partners = ['gankco-logo.png'];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">Who We Are</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pyrrosgaia Oil Services was established with a commitment to driving innovation, sustainability, and excellence in the oil and gas sector.
          </p>
          <div className="w-100 h-0.5 bg-sun-600 mx-auto mt-4 rounded" />
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN – ABOUT */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              We specialize in delivering forward-thinking engineering solutions tailored to meet the demands of upstream operations.
            </p>
            <p>
              Through strong industry partnerships and a focus on technical competence, we add value across the energy value chain. 
              Our dedication to quality, safety, and efficiency ensures that we exceed client expectations and set new benchmarks.
            </p>
            <p>
              We are committed to Health, Safety, and Environmental protection in every aspect of our operations.
            </p>
          </div>

          {/* RIGHT COLUMN – Vision, Mission, Values */}
          <div className="space-y-10">
          
          
            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To lead the transformation of the oil and gas industry by bridging cutting-edge technology with deep field expertise, creating cleaner, smarter, and more resilient energy operations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To deliver smarter, more sustainable operations across the energy value chain — from front-end engineering to field optimization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Core Values</h3>
              <p className="text-gray-700">
                Integrity, Quality, Teamwork, and Learning form the foundation of our company culture and guide how we operate every day.
              </p>
            </div>
          </div>
        </div>

        <div className="w-100 h-0.5 bg-sun-600 mx-auto mt-4 rounded" />
        
      </Container>

      {/* Partner Logos */}
      <Container className="mt-20">
        <h3 className="text-center text-xl font-bold text-navy-900 mb-6">Our Partners</h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {partners.map((logo, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <img
                src={partner}
                alt={`Partner ${i + 1}`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default About;
