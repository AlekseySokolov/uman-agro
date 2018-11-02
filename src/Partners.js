import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import itemsLogosPartners from './itemsLogosPartners.js';

class Partners extends React.Component {
  render () {
    const logos = itemsLogosPartners.map((item, index) => <img className="logosPartners" src={item.src} key={index} alt={item.altText}></img>)
    return (
      <div className="container-fluid partners">
        <h3 className="text-center titlePartners lead" style={{fontSize : "3vh", color : "#202020"}}>Наши партнеры</h3>
        <div className="row">
      {logos}
    </div>
    </div>
    )
  }
}

export default Partners;
