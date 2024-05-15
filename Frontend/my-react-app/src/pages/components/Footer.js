import React from 'react';
import SocialMedia from './SocialMedia';
import facebook from "../facebook-icon.png";
import instagram from "../instagram-icon.png";
import twitter from "../twitter-icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3><span className="highlighted">AUCTION</span></h3>
          <a className="left-footer-column" href="#">About Us</a>
          <a className="left-footer-column" href="#">Terms and Conditions</a>
          <a className="left-footer-column" href="#">Privacy and Policy</a>
        </div>
        <div className="footer-column">
          <h3><span className="highlighted">GET IN TOUCH</span></h3>
          <p className="contact-info">Call Us at +123 797-567-2535</p>
          <a className="contact-info" href="mailto:support@auction.com">support@auction.com</a>
          <div className="social-icons">
            <SocialMedia href="https://facebook.com" src={facebook} alt="Facebook" />
            <SocialMedia href="https://twitter.com" src={instagram} alt="Twitter" />
            <SocialMedia href="https://instagram.com" src={twitter} alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
