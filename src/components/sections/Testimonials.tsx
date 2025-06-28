import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Thompson',
    title: 'Homeowner',
    content: 'BuildRight transformed our vision into reality. Their attention to detail and quality craftsmanship exceeded our expectations. Our new home is exactly what we dreamed of.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Business Owner',
    content: 'We hired BuildRight for our office renovation and couldn\'t be happier with the results. The project was completed on time and within budget, with minimal disruption to our operations.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'David Wilson',
    title: 'Property Developer',
    content: 'Having worked with many construction companies over the years, BuildRight stands out for their professionalism and reliability. They\'re now our go-to partner for all development projects.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-navy-900 text-white">
      <Container>
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Hear from those who have experienced our commitment to quality and service."
          centered
          className="text-white"
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={goToPrevious}
              className="bg-amber-500 rounded-full p-2 hover:bg-amber-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={goToNext}
              className="bg-amber-500 rounded-full p-2 hover:bg-amber-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="bg-navy-800 rounded-xl p-8 md:p-12 shadow-lg">
            <Quote className="text-amber-500 mb-6" size={48} />
            
            <div className="mb-8">
              <p className="text-xl italic mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-amber-400">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;