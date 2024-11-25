import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6 mb-4">
            <h4>Our Address</h4>
            <p>
              Cranvalor Innovations Pvt. Ltd.<br />
              Regus Bangalore, The Estate, 8th Floor<br />
              Dickenson Road, Bangalore<br />
              Karnataka - 560042, India
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:contact@cranvalor.com">contact@cranvalor.com</a>
            </p>
          </div>
          {/* Map */}
          <div className="col-md-6 mb-4">
            <h4>Find Us Here</h4>
            <div className="map-container">
              <iframe
                title="Cranvalor Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9600787179666!2d77.61212507381033!3d12.974405214819352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16840dbaaaab%3A0xa5a7f88c72157b23!2sRegus%20-%20Bangalore%2C%20The%20Estate!5e0!3m2!1sen!2sin!4v1732435926200!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="row mt-5">
          <div className="col-12">
            <h4>Send Us a Message</h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
