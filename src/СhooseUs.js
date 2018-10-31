import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class ChooseUs extends React.Component {
  render() {
    return (

       <div className="container">
        <div className="jumbotron chooseUs"><h2 className="text-center" style={{fontSize : "3vh", color : "#202020"}}>Почему клиенты выбирают ЮМАН?</h2></div>
         <div className="row">
          <div className="col text-center infoChooseUs"><p className="titleInfoChooseUs">Оперативная</p>поставка</div>
          <div className="col text-center infoChooseUs"><p className="titleInfoChooseUs">Гибкая форма</p> оплаты</div>
          <div className="col text-center infoChooseUs"><p className="titleInfoChooseUs">Полный пакет</p> документов</div>
          <div className="col text-center infoChooseUs"><p className="titleInfoChooseUs">Качество</p> ГОСТ</div>
          <div className="col text-center infoChooseUs"><p className="titleInfoChooseUs">Работа с одним</p> поставщиком</div>
          <div className="col text-center infoChooseUs"><p className="titleInfoChooseUs">Широкий</p> ассортимент </div>

        </div>
       </div>
  )
  }
}

export default ChooseUs;
