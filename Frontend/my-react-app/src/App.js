import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/components/Header'; // Uvezite zaglavlje
import Footer from './pages/components/Footer'; // Uvezite podnožje
import HomePage from './pages/components/HomePage';
import AboutUs from './pages/components/AboutUs'
import TOS from './pages/components/TOS';
import PAP from './pages/components/PAP';
//import './pages/styles/styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TOS />} />
          <Route path="/privacy-and-policy" element={<PAP />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App; 