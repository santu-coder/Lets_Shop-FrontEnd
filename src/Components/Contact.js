import React from "react";
import logo from "../Assets/LetsShop_Images/images/bg-01.jpg";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="c-container">
        <div className="image-section">
          <div className="contact-background">
            <div>
              <h1>CONTACT</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="form-section">
          <h2>Send Us A Message</h2>
          <div className="input-box">
            <span className="icon">📧</span>
            <input type="email" placeholder="Your Email Address" />
          </div>
          <textarea placeholder="How Can We Help?"></textarea>
          <button type="submit">SUBMIT</button>
        </div>

        <div className="info-section">
          <div className="info-box">
            <span className="icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>
                Radha Vallabha Market Favara Chock Near HDFC Bank Khargone M.P
              </p>
            </div>
          </div>

          <div className="info-box">
            <span className="icon">📞</span>
            <div>
              <h3>Lets Talk</h3>
              <p>
                <a href="tel:+18001236879">+1 800 1236879</a>
              </p>
            </div>
          </div>

          <div className="info-box">
            <span className="icon">📧</span>
            <div>
              <h3>Sale Support</h3>
              <p>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
