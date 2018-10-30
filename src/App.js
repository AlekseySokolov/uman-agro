import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron';
import Header from './Header.js';
import Production from './Production.js';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <Navbar />
       <br />
       <Header />
       <Jumbotron />
       <AboutUs />
       <br />
       <br />
       <br />
       <Production />
      </div>
    );
  }
}

export default App;
