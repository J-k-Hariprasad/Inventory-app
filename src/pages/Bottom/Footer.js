 import React from 'react';
import '../Bottom/footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing fresh, organic fruits and vegetables to promote a healthy lifestyle.
          </p>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@the-inventory.com</p>
          <p>Phone: +91 890 456 7890</p>
        </div>

        <div className="footer-section">
          <h2>Thank you</h2>
          <p>Thank you for supporting us</p>
          <p>Thank to the Parterners and investos</p>
          <p>and Delivery Partner</p>
     
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 The Inventory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

