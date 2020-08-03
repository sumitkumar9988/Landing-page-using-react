import React from 'react';
import LandingPage from './Component/LandingPage';
import Contact from './Component/Contact';
import Fade from 'react-reveal/Fade';
import Feature from './Component/Feature';
import Footer from './Component/Footer';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <LandingPage />
      <Fade right>

        <Feature />
        <Contact />
        <Footer />
      </Fade>
    </div>

  );

};

export default App;


