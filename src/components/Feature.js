






import React from 'react';
import './Feature.css';
import qlty from '../images/high-quality.png';
import afrdbl from '../images/affordable.png';
import sprt from '../images/customer-support.png';
const Feature = () => {
  return (
    <div className="features"id="features">
     <div className="feature-container">
  <div className="feature-card">
    <img src={qlty} alt="Health" />
    <h3>High Quality</h3>
    <p>Our products are made with the finest ingredients and quality-controlled processes to ensure top-notch standards.</p>
  </div>
  <div className="feature-card">
    <img src={afrdbl} alt="Beauty" />
    <h3>Affordable</h3>
    <p>We provide premium quality at affordable prices, making wellness accessible to everyone.</p>
  </div>
  <div className="feature-card">
    <img src={sprt} alt="Tech" />
    <h3>Customer Support</h3>
    <p>Our dedicated team is available 24/7 to help with any questions or issues you may have.</p>
  </div>
</div>

    </div>
  );
};

export default Feature;
