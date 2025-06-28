import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A state-of-the-art office building featuring sustainable design elements and modern workspace.'
  },
  {
    id: 2,
    title: 'Luxury Residence',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Custom-built luxury home with premium finishes and smart home technology integration.'
  },
  {
    id: 3,
    title: 'Shopping Mall Renovation',
    category: 'Renovation',
    image: 'https://images.pexels.com/photos/5875837/pexels-photo-5875837.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete renovation of a shopping center, modernizing the space while maintaining operations.'
  },
  {
    id: 4,
    title: 'Hospital Wing Addition',
    category: 'Institutional',
    image: 'https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'New wing addition to an existing hospital with specialized medical facilities and patient rooms.'
  },
  {
    id: 5,
    title: 'Industrial Warehouse',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large-scale warehouse construction with advanced logistics systems and storage solutions.'
  },
  {
    id: 6,
    title: 'Waterfront Apartment Complex',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Multi-unit residential complex with premium amenities and scenic waterfront views.'
  }
];

const categories = ['All', ...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle 
          title="Our Featured Projects" 
          subtitle="Explore our portfolio of completed construction projects across various sectors."
          centered
        />
        
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full mb-2 transition-colors ${
                activeCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-amber-300">{project.category}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-navy-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 text-amber-500 font-medium hover:text-amber-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;