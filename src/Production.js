import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';
import ProductionCard from './ProductionCard';
import headerWallpaper from './headerWallpaper.jpg';
import items from './Items.js';
import cardTitles from './cardTitles';

class Production extends Component {
   render() {
     const slides = items.map((item, index, title) => <ProductionCard title={cardTitles[index]} src={item.src} key={index} alt={item.altText}/>)
    return (
      <div className="container">
      <h2 className="display-6 text-center" style={{fontSize : '3vh', color:"#d9534f", marginTop:"10vmin", marginBottom:"10vmin", fontWeight:"bold"}}>Наша продукция</h2>
     <div className="row">
       {slides}
       </div>
      </div>

    );
  }
}

export default Production;
