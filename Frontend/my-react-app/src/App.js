import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'
import TOS from './components/TOS';
import PAP from './components/PAP';

const App = () => {
  return (
    <Router>
        <Header /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/terms-and-conditions' element={<TOS />} />
          <Route path='/privacy-and-policy' element={<PAP />} />
        </Routes>
        <Footer /> 
    </Router>
  );
};

export default App; 
