import React from 'react';
import SocialMedia from './components/SocialMedia';
import './styles/styles.css'; 
import facebook from "./facebook-icon.png"
import instagram from "./instagram-icon.png"
import twitter from "./twitter-icon.png"

const Home = () => {
  return (
    <div>
      <header>
        <div className="header-top">
          <div className="social-icons">
            <SocialMedia href="https://facebook.com" src={facebook} alt="Facebook" />
            <SocialMedia href="https://twitter.com" src={instagram} alt="Twitter" />
            <SocialMedia href="https://instagram.com" src={twitter} alt="Instagram" />
          </div>
          <div className="user-info">
            Hi, John Doe
          </div>
        </div>
        <div className="header-main">
          <div className="logo">
            <a href="#">AUCTION</a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Try enter: Shoes" />
            <button type="submit">Search</button>
          </div>
          <nav className="main-nav">
            <a href="#">HOME</a>
            <a href="#">SHOP</a>
            <a href="#">MY ACCOUNT</a>
          </nav>
        </div>
      </header>
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3><span className="highlighted">AUCTION</span></h3>
            <a href="#">About Us</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy and Policy</a>
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
    </div>
  );
};

export default Home;