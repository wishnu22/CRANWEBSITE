import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="lighting-effect">
        <div className="ball ball-1">Health</div>
        <div className="ball ball-2">Beauty</div>
        <div className="ball ball-3">Feature</div>
        <div className="ball ball-4">Tech</div>
        <div className="ball ball-5">Style</div>
      </div>
      <h1>Welcome to Cranvalor Innovations</h1>
      <p>Your gateway to a healthier, more beautiful, and tech-driven world.</p>
      <a href="#products" className="btn btn-light btn-lg">Explore Products</a>
    </section>
  );
};

export default Hero;
