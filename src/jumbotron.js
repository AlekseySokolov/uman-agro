import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import iconFarm from './iconFarm.png';



class Jumbotron extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="jumbotron top">
        <img src={iconFarm} className="rounded mx-auto d-block iconFarm" alt="..." />
        <h1 className="display-6 text-center" style={{fontSize : '3vh', color:"#d9534f", fontWeight : "bold", marginTop : "3vmin"}}>Производство и поставка зерна по всей России</h1>
        <br />
        <p className="lead text-center" style={{fontSize : '1.8vh'}}>ГК ЮМАН с 2009 года работает на рынке сельского хозяйства России и зарубежья. <br />Сегодня наша компания занимает одну из лидирующих позиций на рынке оптовых поставок <br /> зерновых, масличных и бобовых культур в Приволжском федеральном округе.Приоритетами в работе <br /> ГК ЮМАН является выстраивание долгосрочных и взаимовыгодных партнерских отношений.</p>
        <br />
        <p className="lead text-center">
          <a className="btn btn-danger btn-lg" style={{fontSize : '2.2vh', marginTop : "2vmin"}} href="#" role="button" >Скачать прайс</a>
        </p>
      </div>
    </div>
    );
  }
}

export default Jumbotron;
