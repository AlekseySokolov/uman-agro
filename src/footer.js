import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Footer extends React.Component {
  render () {
    return (
      <div className="container-fluid footer">
      <p className="lead text-center text-light" style={{fontWeight : "bold"}}>www.uman-agro.ru</p>
      <p className="lead text-center text-light" style={{fontWeight : "bold"}}>(843) 528-28-47 г. Казань, ул. Чистопольская, 71а</p>
      </div>
    )
  }
}

export default Footer;
