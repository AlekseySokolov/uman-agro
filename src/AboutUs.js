import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="container">
       <div className="row">
         <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#d9534f", fontSize : "5vh"}}><strong>2009</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>на рынке сельского хозяйства с 2009 года</p></div>
         <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#d9534f", fontSize : "5vh"}}><strong>40000</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>Мы поставляем более 40 000 тн зерна в год</p></div>
         <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#d9534f", fontSize : "5vh"}}><strong>30</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>Более 30 предприятий партнёров</p></div>
         <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#d9534f", fontSize : "5vh"}}><strong>15</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>Работаем в 15 субъектах России</p></div>
       </div>
      </div>
    );
  }
}

export default AboutUs;
