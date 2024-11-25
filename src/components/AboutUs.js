import React from "react";
import "./AboutUs.css";
import companyImage from '../images/gfincr.jpg';
const AboutUs = () => {
  return (
    <section className="about-us py-5" id="about">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Side: Image */}
          <div className="col-lg-6 text-center">
          <img src={companyImage} alt="About Cranvalor" className="about-img" />
          </div>

          {/* Right Side: Text */}
          <div className="col-lg-6">
            <h3 className="about-title">Who We Are</h3>
            <p className="about-text">
            Founded with a vision to revolutionize health and beauty, Cranvalor integrates advanced technology into every aspect of our operations. From the precise formulation of our whey protein products to the development of future-ready beauty solutions,providing high-quality whey protein and nutritional supplements for both men and women, we leverage innovation to achieve excellence.
            </p>
            <h4 className="about-subtitle">Our Technology</h4>
            <p className="about-text">
            Our cutting-edge technology optimizes protein formulations, ensuring maximum efficiency and results. Simultaneously, we are investing in AI and machine learning to create beauty solutions tailored to individual needs, setting new standards in personalized care.
            </p>
            <h4 className="about-subtitle">Our Mission</h4>
            <p className="about-text">
              To provide high-quality, affordable, and effective nutritional products that empower individuals to lead healthier lives. We strive to make wellness accessible to all and continuously innovate to meet our customers’ needs.
            </p>
            <h4 className="about-subtitle">Our Vision</h4>
            <p className="about-text">
              To become the most trusted brand in the health and nutrition sector, promoting fitness, well-being, and vitality through our range of supplements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
