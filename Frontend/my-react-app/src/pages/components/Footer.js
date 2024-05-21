import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import facebook from "../pictures/facebook-icon.png";
import instagram from "../pictures/instagram-icon.png";
import twitter from "../pictures/twitter-icon.png";
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className = "footer-content">
        <div className = "footer-column">
          <h3><span className = "highlighted">AUCTION</span></h3>
          <Link className = "left-footer-column" to = "/about-us">About Us</Link>
          <Link className = "left-footer-column" to = "/terms-and-conditions">Terms and Conditions</Link>
          <Link className = "left-footer-column" to = "/privacy-and-policy">Privacy and Policy</Link>
        </div>
        <div className = "footer-column">
          <h3><span className = "highlighted">GET IN TOUCH</span></h3>
          <p className = "contact-info">Call Us at +123 797-567-2535</p>
          <a className = "contact-info" href="mailto:support@auction.com">support@auction.com</a>
          <div className = "social-icons">
            <SocialMedia href="https://facebook.com" src = {facebook} alt = "Facebook" />
            <SocialMedia href="https://twitter.com" src = {instagram} alt = "Twitter" />
            <SocialMedia href="https://instagram.com" src = {twitter} alt = "Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

