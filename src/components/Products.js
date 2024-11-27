import React, { useEffect } from 'react';
import './Products.css';
import vanila from '../images/vanilla-whey-protein.jpg';
import chocolate from '../images/chocolate-whey-protein.jpg';
import strawberry from '../images/strawberry-whey-protein.jpg';
import mango from '../images/mango-whey-protein.jpg';
import health from '../images/healthtech.jpg';
import style from '../images/styletech.jpg';
import fitness from '../images/fitnesstech.jpg';

const Product = () => {
  useEffect(() => {
    const productItems = document.querySelectorAll('.product-item');

    const handleScroll = () => {
      productItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='explore' className="product-section">
      <div className="web-service-introduction">
        <h2>Our Web Service: Health, Beauty & Style for the Modern World</h2>
        <p>
          At <strong>Cranvalor Innovations</strong>, we bridge the gap between <strong>technology</strong> and <strong>wellness</strong>.
          Our products are a blend of innovation and quality, crafted to enhance health, beauty, and style. With cutting-edge technology and premium ingredients, we bring solutions that cater to modern needs, ensuring affordability and excellence for a global audience.
        </p>
        <div className="service-images">
          <img src={health} alt="Health Tech" />
          Health Technology
          <img src={style} alt="Style Tech" />
          Style Technology
          <img id="products" src={fitness} alt="Fitness Tech" />
          Fitness Technology
        </div>
      </div>

      {/* Whey Protein Products Section */}
      <div className="product-images">
        <h3 >Our Health Supplements</h3>
        <div className="product-item">
          <img src={vanila} alt="Whey Protein 1" />
          <p>Whey Protein Isolate</p>
        </div>
        <div className="product-item">
          <img src={chocolate} alt="Whey Protein 2" />
          <p>Whey Protein Concentrate</p>
        </div>
        <div className="product-item">
          <img src={strawberry} alt="Whey Protein 3" />
          <p>Flavored Whey Protein</p>
        </div>
        <div className="product-item">
          <img src={mango} alt="Whey Protein 4" />
          <p>Custom Whey Protein Blends</p>
        </div>
        <p className='wheyexpla'>
          At <strong>Cranvalor Innovations</strong>, we pride ourselves on producing <strong>high-quality whey protein.</strong>
          Cranvalor Whey Protein Powder stands as India’s best and a global sensation in health supplements. Renowned for its superior quality and exceptional results, it’s crafted to meet international standards, making it a top choice worldwide. Powering fitness enthusiasts across continents, Cranvalor combines purity, taste, and performance like no other. Trusted by millions, it’s not just India’s pride but a global bestseller. Choose Cranvalor—where the best meets the world!</p>
      </div>
    </section>
  );
};

export default Product;
