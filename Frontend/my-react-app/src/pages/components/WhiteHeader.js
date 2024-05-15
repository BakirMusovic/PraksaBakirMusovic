import React from 'react';

const WhiteHeader = () => {
  return (
    <div className="header-main">
      <div className="logo">
        <a className ="auction" href="#">AUCTION</a>
      </div>
      <div className="search-bar">
        <input className ="input-field"type="text" placeholder="Try enter: Shoes" />
        <button className ="input-button"type="submit">Search</button>
      </div>
      <nav className="main-nav">
        <a className="main-nav-a"href="#">HOME</a>
        <a className="main-nav-a"href="#">SHOP</a>
        <a className="main-nav-a"href="#">MY ACCOUNT</a>
      </nav>
    </div>
  );
};

export default WhiteHeader;
