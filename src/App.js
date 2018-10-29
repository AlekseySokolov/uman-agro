import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js';
import Jumbotron from './jumbotron';
import Header from './Header.js';
import Production from './Production.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <Navbar />
       <br />
       <Jumbotron />
       <Header />
       <br />
       <br />
       <Production />
      </div>
    );
  }
}

export default App;
