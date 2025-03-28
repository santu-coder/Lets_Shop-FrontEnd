import React from "react";
import "../Style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Categories */}
        <div className="footer-section">
          <h4 className="footer-title">CATEGORIES</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h4 className="footer-title">HELP</h4>
          <ul>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="footer-section">
          <h4 className="footer-title">GET IN TOUCH</h4>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4 className="footer-title">NEWSLETTER</h4>
          <input type="email" placeholder="email@example.com" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | Made with{" "}
          <span className="heart">❤</span> by
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Colorlib
          </a>{" "}
          & distributed by
          <a
            href="https://themewagon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ThemeWagon
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
