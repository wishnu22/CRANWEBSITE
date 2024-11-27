import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="fireball-container">
        <div className="fireball fireball-1">Health</div>
        <div className="fireball fireball-2">Beauty</div>
        <div className="fireball fireball-3">Future</div>
        <div className="fireball fireball-4">Style</div>
        <div className="fireball fireball-5">Technology</div>
      </div>
      <h1>Welcome to Cranvalor Innovations</h1>
      <p><strong>Your gateway to a healthier, more beautiful, and tech-driven world.</strong></p>
      <a href="#products" className="explore-btn">Explore</a>
    </section>
  );
};

export default Hero;
