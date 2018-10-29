import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';
import mainLogo from './uman.png'

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="mainLogo" src={mainLogo} />
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.onClickCollapseMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapseMenuClassSwitch} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-success" href="#">Продукция <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#">Клиенты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#">Приемущества</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#">Отзывы</a>
            </li>
          </ul>
          <span className="navbar-text text-info">
            Казань, ул.Чистопольская, 71а (8 800 800 00 00)
          </span>
        </div>
      </nav>

    )
  }
}

export default Navbar;
