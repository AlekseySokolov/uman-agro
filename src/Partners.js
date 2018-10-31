import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import itemsLogosPartners from './itemsLogosPartners.js';

class Partners extends React.Component {
  render () {
    const logos = itemsLogosPartners.map((item, index) => <img className="logosPartners" src={item.src} key={index} alt={item.altText}></img>)
    return (
      <div className="container partners">
        <div className="row">
      {logos}
    </div>
    </div>
    )
  }
}

export default Partners;
