import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';
import ProductionCard from './ProductionCard';
import headerWallpaper from './headerWallpaper.jpg';
import items from './Items.js';

class Production extends Component {
   render() {
     const slides = items.map((item, index) => <ProductionCard src={item.src} key={index} alt={item.altText}/>)
    return (
      <div className="container">
       <div className="row">
       {slides}
       </div>
      </div>

    );
  }
}

export default Production;
