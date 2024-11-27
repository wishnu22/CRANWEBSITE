import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="fireball-container">
        <div className="fireball fireball-1">Health</div>
        <div className="fireball fireball-2">Beauty</div>
        <div className="fireball fireball-3">Techn</div>
        <div className="fireball fireball-4 ">Style</div>
       {/* <div className="fireball fireball-5">Technology</div> */}
      </div>
      <h1 className="hero-heading">Welcome to <span className="highlight">Cranvalor Innovations</span></h1>
      <p className="hero-subheading"><strong>Your gateway to a healthier, more beautiful, and tech-driven world.</strong></p>
      <a href="#products" className="explore-btn">Explore</a>
    </section>
  );
};

export default Hero;
