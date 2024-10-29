import React from 'react';
import { Home, Star, Clock, MapPin, Search, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Professionals from './components/Professionals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Professionals />
      <Footer />
    </div>
  );
}

export default App;