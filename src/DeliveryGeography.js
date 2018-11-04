import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import delivery from './Map.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';


class DeliveryGeography extends React.Component {
  render() {
    return (
      <div className="container-fluid">
       <h3 className="text-center titleDeliveryGeography lead" style={{fontSize : "3vh", fontWeight : "bold", color:"#ff4444"}}>География поставок
         <ScrollableAnchor id={'section4'}><div></div></ScrollableAnchor></h3>
       <img src={delivery} className="map" />
      </div>
    );
  }
}

export default DeliveryGeography;
