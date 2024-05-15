import React from 'react';
import SocialMedia from './components/SocialMedia';
import BlackHeader from './components/BlackHeader';
import './styles/styles.css'; 
import WhiteHeader from './components/WhiteHeader';
import Footer from './components/Footer';
import facebook from "./facebook-icon.png"
import instagram from "./instagram-icon.png"
import twitter from "./twitter-icon.png"

const Home = () => {
  return (
    <div>
      <header>
        <BlackHeader />
        <WhiteHeader />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
