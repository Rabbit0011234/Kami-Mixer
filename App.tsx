
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import OrderSteps from './components/OrderSteps';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Pricing />
        <OrderSteps />
        <Contact />
      </main>
    </div>
  );
};

export default App;
