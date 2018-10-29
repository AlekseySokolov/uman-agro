import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';
import headerWallpaper from './headerWallpaper.jpg'

class Header extends Component {
  render() {
    return (
      <img className="headerWallpaper" src={headerWallpaper}></img>
    );
  }
}

export default Header;
