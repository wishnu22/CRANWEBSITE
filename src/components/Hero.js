import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-secondary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to Cranvalor</h1>
        <p className="lead">Innovating Health and Beauty with Technology</p>
        <p className="lead">"Cranvalor Innovations Pvt. Ltd. is a pioneer in merging technology with health and beauty. As a trusted manufacturer of premium whey protein and a forward-thinking tech company, we are committed to delivering unparalleled solutions for a healthier, more vibrant you."</p>
        <a href="#products" className="btn btn-light btn-lg">Explore Products</a>
      </div>
    </section>
  );
};

export default Hero;
