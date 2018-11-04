import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import iconGost from './iconGOST.png';
import like from './like.png';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="container-fluid mainBlockAbout">
       <div className="jumbotron aboutUs"><h3 className="aboutUsTitle" style={{fontSize : "3vh", lineHeight : "4vh", marginTop : "1vmin"}}>Поставляем на экспорт<br />гарантированное качество продукции по ГОСТ</h3><img src={like} className="rounded mx-auto d-block iconLike" alt="..." /></div>
       <div className="container infoAbout">
         <div className="row">
          <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#ff4444", fontSize : "5vh", fontWeight : "normal"}}><strong>2009</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>на рынке сельского хозяйства <br /> с 2009 года</p></div>
          <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#ff4444", fontSize : "5vh", fontWeight : "normal"}}><strong>40 000</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>Мы поставляем более 40 000 тн <br /> зерна в год</p></div>
          <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#ff4444", fontSize : "5vh", fontWeight : "normal"}}><strong>30</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>Более 30 предприятий партнёров</p></div>
          <div className="col-xs-6 col-sm-3"><p className="display-4 text-center" style={{color:"#ff4444", fontSize : "5vh", fontWeight : "normal"}}><strong>15</strong></p><p className="lead text-center" style={{fontSize : "1.8vh"}}>Работаем в 15 субъектах России</p></div>
         </div>
      </div>
    </div>
    );
  }
}

export default AboutUs;
