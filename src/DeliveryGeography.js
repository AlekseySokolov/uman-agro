import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import delivery from './Map.png';

class DeliveryGeography extends React.Component {
  render() {
    return (
      <div className="container-fluid">
       <h3 className="text-center titleDeliveryGeography lead" style={{fontSize : "3vh", color : "#202020"}}>География поставок</h3>
       <img src={delivery} className="map" />
      </div>
    );
  }
}

export default DeliveryGeography;
