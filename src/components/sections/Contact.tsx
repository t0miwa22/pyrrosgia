import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className="text-navy-500 mr-4">{icon}</div>
    <div>
      <h3 className="font-bold text-navy-500 mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy-200">
      <Container>
        <SectionTitle 
          title="Contact Us" 
          subtitle="Get in touch to discuss your needs."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-navy-500">Send Us a Message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="Phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-6 text-navy-900">Contact Information</h3>
              
              <ContactInfo
                icon={<MapPin size={24} />}
                title="Our Location"
                content={
                  <address className="not-italic">
                    Lagos, Nigeria.<br />
                  </address>
                }
              />
              
              <ContactInfo
                icon={<Phone size={24} />}
                title="Phone Number"
                content={<a href="tel:+2347048000703" className="hover:text-navy-500">+2347048000703</a>}
              />
              
              <ContactInfo
                icon={<Mail size={24} />}
                title="Email Address"
                content={<a href="mailto:adetomiwa@pyrrosgaiaoilservices.com" className="hover:text-navy-500">adetomiwa@pyrrosgaiaoilservices.com</a>}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
