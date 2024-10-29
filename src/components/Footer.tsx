import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">UrbanPro</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop solution for all home services. Quality work, 
              professional service providers, and 100% satisfaction guaranteed.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Cleaning', 'Repairs', 'Beauty', 'Painting', 'Plumbing', 'Electrical'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Terms & Conditions', 'Privacy Policy', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-white text-sm font-semibold mb-2">Download our app</h4>
              <div className="flex space-x-2">
                <button className="bg-white text-gray-900 px-4 py-2 rounded text-sm hover:bg-gray-100">
                  App Store
                </button>
                <button className="bg-white text-gray-900 px-4 py-2 rounded text-sm hover:bg-gray-100">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} UrbanPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}