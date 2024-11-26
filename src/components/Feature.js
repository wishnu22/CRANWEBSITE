import React from 'react';
import './Feature.css';
import { FaCogs, FaUserShield, FaLeaf, FaHandshake, FaGlobe } from 'react-icons/fa';

const featuresRowOne = [
  { icon: <FaCogs />, title: 'Innovation', description: 'Tech-driven solutions for modern lifestyles.' },
  { icon: <FaUserShield />, title: 'Customer Support', description: 'Round-the-clock assistance for all your needs.' },
  { icon: <FaLeaf />, title: 'Sustainability', description: 'Eco-friendly and ethical manufacturing practices.' },
  { icon: <FaHandshake />, title: 'Affordable', description: 'Quality meets affordability for everyone.' },
];

const featuresRowTwo = [
  { icon: <FaGlobe />, title: 'Global Reach', description: 'Providing solutions worldwide.' },
  { icon: <FaLeaf />, title: 'Health & Wellness', description: 'Innovative supplements for a healthy life.' },
  { icon: <FaCogs />, title: 'Advanced Tech', description: 'Utilizing cutting-edge technology for better living.' },
  { icon: <FaHandshake />, title: 'Trust', description: 'Building long-term relationships with customers.' },
];

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="carousel-row row-one">
        {featuresRowOne.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="carousel-row row-two">
        {featuresRowTwo.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
