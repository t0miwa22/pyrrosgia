import React from 'react';
import Container from '../ui/Container';
import 'swiper/css';
import 'swiper/css/autoplay';

import gankco from '../../assets/gankco-logo.png'
import pyrr from '../../assets/py.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const partners = [
  {
    name: 'Gankco',
    logo: gankco,
    websiteUrl: 'https://gankcoenergy.com/'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-2">Who We Are</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pyrrosgaia Oil Services was established with a commitment to driving innovation, sustainability, and excellence in the oil and gas sector.
          </p>
          <div className="w-100 h-0.5 bg-sun-600 mx-auto mt-4 rounded" />
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN – ABOUT */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h3 className="text-xl font-bold text-navy-700 mb-2">Our Vision</h3>
            <p>
              We are committed to Health, Safety, and Environmental protection in every aspect of our operations.
            </p>
          </div>

          {/* RIGHT COLUMN – Vision, Mission, Values */}
          <div className="space-y-10">
          

            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To deliver smarter, more sustainable operations across the energy value chain — from front-end engineering to field optimization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-2">Core Values</h3>
              <p className="text-gray-700">
                Integrity, Quality, and Value form the foundation of our company culture and guide how we operate every day.
              </p>
            </div>
          </div>
        </div>

        <div className="w-100 h-0.5 bg-sun-600 mx-auto mt-4 rounded" />
        
      </Container>

     

      {/* Partner Logos */}
      <Container className="mt-20">
        <h3 className="text-center text-xl font-bold text-navy-500 mb-6">Our Partners</h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },

          }}
        >
          {partners.map((partner, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center h-full">
              <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="h-12 object-contain transition duration-300 opacity-80 hover:opacity-100"
                />
              </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
    
  );
};


export default About;
