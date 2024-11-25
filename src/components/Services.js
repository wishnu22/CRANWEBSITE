import React from 'react';
import './Services.css';
import techimg from '../images/techimg.jpg';
const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <h3>Whey Protein Manufacturing</h3>
          <p>We offer high-quality whey protein in various forms to meet diverse needs, from unflavored isolated protein to custom-flavored options.</p>
        </div>
        <div className="service-item">
          <h3>Tech Innovations for Beauty</h3>
          <p>AI-powered beauty diagnostics (coming soon).</p>
        </div>
        <div className="service-item">
          <h3>Consulting and Research</h3>
          <p>Assistance for startups and research in health tech., ensuring our clients receive their products in perfect condition and on time.</p>
        </div>
        <section className="big-image-section">
        <div className="big-image-container">
          <img src={techimg} alt="Tech Solutions" />
        </div>
        <div className="big-image-description">
          <h3>Revolutionizing Health with Technology</h3>
          <p>
            At Cranvalor, we integrate advanced technology into every aspect of our operations, from manufacturing high-quality whey protein to offering personalized health and beauty solutions. Our technology-driven approach ensures the best outcomes, whether it's for fitness enthusiasts or those seeking beauty solutions.
          </p>
        </div>
      </section>
      </div>
    </section>
  );
};

export default Services;
