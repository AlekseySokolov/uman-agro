import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';
import ProductionCard from './ProductionCard';
import headerWallpaper from './headerWallpaper.jpg';
import items from './Items.js';
import cardTitles from './cardTitles';
import ScrollableAnchor from 'react-scrollable-anchor';

class Production extends Component {
   render() {
     const slides = items.map((item, index, title) => <ProductionCard title={cardTitles[index]} src={item.src} key={index} alt={item.altText}/>)
    return (
      <div className="container">
       <ScrollableAnchor id={'section1'}><div></div></ScrollableAnchor>
       <h3 className="display-6 text-center lead"  style={{fontSize : '3vh', color:"#ff4444", fontWeight : "bold", marginTop:"15vmin", marginBottom:"15vmin"}}>Наша продукция</h3>
       <div className="row">
        {slides}
       </div>
      </div>

    );
  }
}

export default Production;
