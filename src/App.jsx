import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Features />
        <Testimonials />
        <Form />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;