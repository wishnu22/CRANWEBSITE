import React from 'react';
import './Products.css';
import vanila from '../images/vanilla-whey-protein.jpg';
import chocolate from '../images/chocolate-whey-protein.jpg';
import strawberry from '../images/strawberry-whey-protein.jpg';
import mango from '../images/mango-whey-protein.jpg';
import health from '../images/healthtech.jpg';
import style from '../images/styletech.jpg';
import fitness from '../images/fitnesstech.jpg';
const Product = () => {
  return (
    <section className="product-section">
      <div className="web-service-introduction">
        <h2>Our Web Service: Health, Beauty & Style for the Modern World</h2>
        <p>
          At <strong>Cranvalor Innovations</strong>, we bridge the gap between <strong>technology</strong> and <strong>wellness</strong>. As a leading <strong>tech company</strong> and <strong>health supplement manufacturer</strong>, we leverage cutting-edge technology to provide modern solutions for health, beauty, and style. 
          Our web services are designed to support today’s <strong>tech-savvy</strong> individuals who want to enhance their lifestyle with personalized health and beauty solutions.
        </p>
        <p>
          We use advanced algorithms and data-driven technology to create tailored recommendations, whether it’s for <strong>fitness supplements</strong>, <strong>beauty treatments</strong>, or the latest <strong>lifestyle trends</strong>. Our mission is to empower individuals with the knowledge and tools to make better health and beauty choices, while keeping pace with the fast-evolving digital world.
        </p>
        <div className="service-images">
          <img src={health} alt="Health Tech" />
          <img src={style} alt="Style Tech" />
          <img src={fitness} alt="Fitness Tech" />
        </div>
       
      </div>
      
      {/* Whey Protein Products Section */}
      <div className="product-images">
        <h3>Our Products</h3>
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
        <p>
       <span className='wheyexpla'> At <strong>Cranvalor Innovations,</strong> we pride ourselves on producing <strong>the world’s best high-quality whey protein,</strong> sourced and manufactured in India, catering to the global market. Our whey protein is crafted using state-of-the-art technology, ensuring that every batch is tested for purity, quality, and performance. We leverage advanced technology for rigorous testing and quality control, ensuring that our product meets the highest international standards. Whether you're an athlete, a fitness enthusiast, or someone committed to maintaining optimal health, our whey protein offers a powerful nutritional boost, backed by science and produced with passion.
       </span></p>
      </div>
    </section>
  );
};

export default Product;
