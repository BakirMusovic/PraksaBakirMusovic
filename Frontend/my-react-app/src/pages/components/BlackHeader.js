import React from 'react';
import SocialMedia from './SocialMedia';
import facebook from "../facebook-icon.png";
import instagram from "../instagram-icon.png";
import twitter from "../twitter-icon.png";

const BlackHeader = () => {
  return (
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
  );
};

export default BlackHeader;