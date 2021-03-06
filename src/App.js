import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js';
import HeaderSlideshow from './HeaderSlideshow.js';
import Production from './Production.js';
import AboutUs from './AboutUs.js';
import Partners from './Partners.js';
import ChooseUs from './СhooseUs.js';
import DeliveryGeography from './DeliveryGeography.js';
import NewsBlock from './NewsBlock.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <Navbar />
       <HeaderSlideshow />
       <Jumbotron />
       <AboutUs />
       <Production />
       <DeliveryGeography />
       <ChooseUs />
       <NewsBlock />
       <Partners />
       <Footer />

      </div>
    );
  }
}

export default App;
