import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cn from 'classnames';



class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-6 text-center" style={{fontSize : '4vmin'}}>Корма для с/х животных в России</h1>
        <hr className="my-4" />
        <p className="lead text-center" style={{fontSize : '1.8vmin'}}>Наша компания занимает одну из лидирующих позиций на рынке оптовых поставок</p>
        <br />
        <p className="lead text-center">
          <a className="btn btn-success btn-lg"  style={{fontSize : '2.3vmin'}} href="#" role="button" >Скачать прайс</a>
        </p>
      </div>
    );
  }
}

export default Jumbotron;
