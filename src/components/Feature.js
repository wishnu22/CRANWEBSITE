import React from 'react';
import './Feature.css';
import qlty from '../images/high-quality.png';
import afrdbl from '../images/affordable.png';
import sprt from '../images/customer-support.png';
const Feature = () => {
  return (
    <div className="features"id="features">
      <div className="container">
        <h2 className="text-center mb-5">Our Key Features</h2>
        <div className="row">
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="feature-card">
            <img src={qlty} alt="Feature 1" className="feature-icon" />
              <h4>High Quality</h4>
              <p>Our products are made with the finest ingredients and quality-controlled processes to ensure top-notch standards.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="feature-card">
              <img src={afrdbl} alt="Feature 2" className="feature-icon" />
              <h4>Affordable</h4>
              <p>We provide premium quality at affordable prices, making wellness accessible to everyone.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="feature-card">
              <img src={sprt} alt="Feature 3" className="feature-icon" />
              <h4>Customer Support</h4>
              <p>Our dedicated team is available 24/7 to help with any questions or issues you may have.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
