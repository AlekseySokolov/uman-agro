import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import itemsLogosPartners from './itemsLogosPartners.js';
import ScrollableAnchor from 'react-scrollable-anchor';

class Partners extends React.Component {
  render () {
    const logos = itemsLogosPartners.map((item, index) => <img className="logosPartners" src={item.src} key={index} alt={item.altText}></img>)
    return (
      <div className="container partners">
        <h3 className="text-center titlePartners lead" style={{fontSize : "21px", fontWeight : "bold", color : "#ff4444"}}>Наши партнеры</h3>
        <div className="justify-content-center">
      <div className="col-lg-12">{logos}</div>
    </div>
    <ScrollableAnchor id={'section2'}>
      <div></div>
    </ScrollableAnchor>
    </div>
    )
  }
}

export default Partners;
