import React from 'react';
import './Feature.css';
import { FaRocket, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Innovative Solutions',
      description: 'We deliver forward-thinking ideas to solve modern challenges.',
    },
    {
      icon: <FaGlobe />,
      title: 'Global Connections',
      description: 'Expanding your reach to new horizons.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Systems',
      description: 'Prioritizing your security with cutting-edge technology.',
    },
  ];

  return (
    <section id='features' className="features">
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="features-header">
        <h2>Why Choose Us?</h2>
        <p>Leading the way with innovation, reliability, and security.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
