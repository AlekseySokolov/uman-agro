import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';



class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron top">
        <h1 className="display-6 text-center" style={{fontSize : '3.5vh', color:"#5cb85c"}}>Производство и поставка зерна по всей России</h1>
        <br />
        <p className="lead text-center" style={{fontSize : '1.8vh'}}>ГК ЮМАН с 2009 года работает на рынке сельского хозяйства России и зарубежья. <br />Сегодня наша компания занимает одну из лидирующих позиций на рынке оптовых поставок <br /> зерновых, масличных и бобовых культур в Приволжском федеральном округе. Приоритетами в работе <br /> ГК ЮМАН является выстраивание долгосрочных и взаимовыгодных партнерских отношений.</p>
        <br />
        <p className="lead text-center">
          <a className="btn btn-success btn-lg"  style={{fontSize : '2vh'}} href="#" role="button" >Скачать прайс</a>
        </p>
        <br />
        <hr />
      </div>
    );
  }
}

export default Jumbotron;
