import React, { useState, useEffect } from 'react';
import { FaCogs, FaUserShield, FaLeaf, FaHandshake, FaGlobe } from 'react-icons/fa';
import './Feature.css';

const Features = () => {
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

  const [offsetOne, setOffsetOne] = useState(0);
  const [offsetTwo, setOffsetTwo] = useState(0);
  const [directionOne, setDirectionOne] = useState(1); // 1 = right, -1 = left
  const [directionTwo, setDirectionTwo] = useState(-1); // 1 = right, -1 = left

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the first row
      setOffsetOne((prev) => {
        if (prev >= 50 && directionOne === 1) setDirectionOne(-1);
        if (prev <= 0 && directionOne === -1) setDirectionOne(1);
        return prev + 5 * directionOne; // Slow speed
      });

      // Update the second row
      setOffsetTwo((prev) => {
        if (prev <= -50 && directionTwo === -1) setDirectionTwo(1);
        if (prev >= 0 && directionTwo === 1) setDirectionTwo(-1);
        return prev + 5 * directionTwo; // Slow speed
      });
    }, 500); // Slower interval

    return () => clearInterval(interval);
  }, [directionOne, directionTwo]);

  const renderFeatureRow = (features, offset) => (
    <div className="features-row" style={{ transform: `translateX(${offset}%)` }}>
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="features-container">
      <div className="features-wrapper">{renderFeatureRow(featuresRowOne, offsetOne)}</div>
      <div className="features-wrapper">{renderFeatureRow(featuresRowTwo, offsetTwo)}</div>
    </div>
  );
};

export default Features;
