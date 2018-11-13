import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import iconFarm from './iconFarm.png';
import presentation from './presentation.pdf';



class Jumbotron extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="jumbotron top">
        <img src={iconFarm} className="rounded mx-auto d-block iconFarm" alt="..." />
        <h1 className="display-6 text-center" style={{fontSize : '21px', color:"#ff4444", fontWeight : "bold", marginTop : "3vmin"}}>Производство и поставка зерна по всей России</h1>
        <br />
        <p className="lead text-center" style={{fontSize : '16px'}}>ГК ЮМАН с 2009 года работает на рынке сельского хозяйства России и зарубежья. <br />Сегодня наша компания занимает одну из лидирующих позиций на рынке оптовых поставок <br /> зерновых, масличных и бобовых культур в Приволжском федеральном округе.Приоритетами в работе <br /> ГК ЮМАН является выстраивание долгосрочных и взаимовыгодных партнерских отношений.</p>
        <br />
        <p className="lead text-center">
          <a className="btn btn-danger btn-lg" style={{fontSize : '16px', marginTop : "1.5vmin"}} href={presentation} role="button" >Скачать презентацию</a>
        </p>
      </div>
    </div>
    );
  }
}

export default Jumbotron;
