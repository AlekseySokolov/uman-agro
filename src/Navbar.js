import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';
import mainLogo from './uman.png'
import iconPhone from './iconPhone.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: 0, scrollDuration: 1300})

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse : false
    }
    this.onClickCollapseMenu = this.onClickCollapseMenu.bind(this);
  }

onClickCollapseMenu() {
  this.setState({
    collapse : !this.state.collapse
  })
}

  render() {

    const collapseMenuClassSwitch = cn({
      'collapse navbar-collapse' : true,
      'show' : this.state.collapse
    })

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light" style={{boxShadow: "15px 0px 8px -2px rgba(50, 50, 50, 0.50)", opacity : "0.93"}}>
        <a href="#section0"><img className="mainLogo" src={mainLogo} /></a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.onClickCollapseMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={collapseMenuClassSwitch} id="navbarSupportedContent">
          <br />
         <ul  className="navbar-nav mr-auto"  style={{fontWeight:"bold",fontSize:"1.8vh"}}>
          <li className="nav-item">
            <a className="nav-link text-success" href="#section1">Продукция</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="#section4">География поставок</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="#section3">Приемущества</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="#section5">Новости</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="#section2">Клиенты</a>
          </li>
         </ul>
          <span className="navbar-text text-info">
            <img className="iconPhone" src={iconPhone} />
          </span>
          <span className="navbar-text text-info">
            <p style={{color:"#ff4444",fontWeight:"bold",fontSize:"1.8vh",marginTop : '2vh'}}>Казань, ул.Чистопольская, 71а (8 843 528 28 47)</p>
          </span>
        </div>
      </nav>

    )
  }
}

export default Navbar;
