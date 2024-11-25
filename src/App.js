import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Feature from './components/Feature'; 
import Testimonials from './components/Testimonials';
import './App.css';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div>
   
      <Hero />
      <Feature /> 
      <Products />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
