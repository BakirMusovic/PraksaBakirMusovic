import React from 'react';
import '../pages/styles/WhiteHeader.scss'

const WhiteHeader = () => {
  return (
    <div className='header-main'>
      <div className='logo'>
        <a className='auction' href='#'>AUCTION</a>
      </div>
      <nav className='main-nav'>
        <a className='main-nav-a' href='#'>HOME</a>
        <a className='main-nav-a' href='#'>SHOP</a>
        <a className='main-nav-a' href='#'>MY ACCOUNT</a>
      </nav>
    </div>
  );
};

export default WhiteHeader;
