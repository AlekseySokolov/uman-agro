import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import headerWallpaper1 from './headerWallpaper.jpg';
import headerWallpaper2 from './headerWallpaper2.jpg';
import headerWallpaper3 from './headerWallpaper3.jpg';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  headerWallpaper1,
  headerWallpaper2,
  headerWallpaper3
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows : false
}

const HeaderSlideshow = () => {
  return (
   <div className="container-fluid headerSlideShow">
    <ScrollableAnchor id={'section0'}><div></div></ScrollableAnchor>
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
     </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
      </div>
    </Fade>
    </div>
  )
}

export default HeaderSlideshow;
