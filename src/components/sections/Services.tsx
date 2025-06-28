import React from 'react';
import { Home, Building2, Hammer, TrendingUp, Truck, HardHat } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

type ServiceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceProps) => (
  <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-b-4 border-amber-500">
    <div className="text-amber-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-navy-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and additions built to your specifications with attention to detail.',
      icon: <Home size={40} />,
    },
    {
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and warehouses designed for functionality and efficiency.',
      icon: <Building2 size={40} />,
    },
    {
      title: 'Renovations',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
      icon: <Hammer size={40} />,
    },
    {
      title: 'Project Management',
      description: 'Comprehensive oversight of your construction project from concept to completion.',
      icon: <TrendingUp size={40} />,
    },
    {
      title: 'Heavy Equipment',
      description: 'Excavation, grading, and site preparation with our fleet of modern equipment.',
      icon: <Truck size={40} />,
    },
    {
      title: 'Expert Consultation',
      description: 'Professional advice on materials, design, and construction methods for your project.',
      icon: <HardHat size={40} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Our Construction Services" 
          subtitle="We provide a wide range of construction services for residential and commercial projects."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;