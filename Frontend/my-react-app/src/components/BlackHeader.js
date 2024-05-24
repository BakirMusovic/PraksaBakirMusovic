import React from 'react';

import SocialMedia from './SocialMedia';
import facebook from '../pages/pictures/facebook-icon.png';
import instagram from '../pages/pictures/instagram-icon.png';
import twitter from '../pages/pictures/twitter-icon.png';

import '../pages/styles/BlackHeader.scss';

const BlackHeader = () => {
  return (
    <div className= 'header-top'>
      <div className= 'social-icons'>
        <SocialMedia href='https://facebook.com' src={ facebook } alt='Facebook' />
        <SocialMedia href='https://twitter.com' src={ instagram } alt='Twitter' />
        <SocialMedia href='https://instagram.com' src={ twitter } alt='Instagram' />
      </div>
      <div className='user-info'>
        Hi, John Doe
      </div>
    </div>
  );
};

export default BlackHeader;
