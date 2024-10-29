import React from 'react';
import { Home, Paintbrush, Wrench, Sparkles, Scissors, Car, Dog, Heart } from 'lucide-react';

const services = [
  { icon: Home, name: 'Home Cleaning', description: 'Professional home cleaning services' },
  { icon: Paintbrush, name: 'Painting', description: 'Interior and exterior painting' },
  { icon: Wrench, name: 'Repairs', description: 'Appliance and home repairs' },
  { icon: Sparkles, name: 'Beauty', description: 'Salon at home services' },
  { icon: Scissors, name: 'Haircut', description: 'Professional haircuts at home' },
  { icon: Car, name: 'Car Wash', description: 'Doorstep car cleaning services' },
  { icon: Dog, name: 'Pet Care', description: 'Pet grooming and care' },
  { icon: Heart, name: 'Wellness', description: 'Spa and massage services' },
];

export default function Services() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our wide range of professional services
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-indigo-50 rounded-full">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    {service.description}
                  </p>
                  <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium">
                    Book Now →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}