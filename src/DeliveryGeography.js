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
       <h3 className="text-center titleDeliveryGeography lead" style={{fontSize : "21px", fontWeight : "bold", color:"#ff4444"}}>География поставок</h3>
       <div className="row justify-content-md-center">
         <div className="col">
           <img src={delivery} className="map" />
         </div>
       </div>
        <ScrollableAnchor id={'section3'}><div></div></ScrollableAnchor>
      </div>
    );
  }
}

export default DeliveryGeography;
