import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import delivery from './delivery.png';
import documents from './documents.png';
import gost from './Gost.png';
import partner from './partner.png';
import plus from './plus.png';
import payment from './payment.png';

class ChooseUs extends React.Component {
  render() {
    return (

       <div className="container-fluid mainBlockChooseUs">
        <div className="jumbotron chooseUs"><h3 className="text-center titleChooseUs lead" style={{fontSize : "3vh", color : "#202020"}}>Почему клиенты выбирают ЮМАН?</h3></div>
        <div className="container">
        <div className="row">
         <div className="col text-center infoChooseUs"><img src={delivery} className="rounded mx-auto d-block iconСhooseUs" alt="..." /><p className="titleInfoChooseUs">Оперативная</p><p className="textInfoChooseUs">поставка</p></div>
         <div className="col text-center infoChooseUs"><img src={payment} className="rounded mx-auto d-block iconСhooseUs" alt="..." /><p className="titleInfoChooseUs">Гибкая форма</p><p className="textInfoChooseUs">оплаты</p></div>
         <div className="col text-center infoChooseUs"><img src={documents} className="rounded mx-auto d-block iconСhooseUs" alt="..." /><p className="titleInfoChooseUs">Полный пакет</p><p className="textInfoChooseUs">документов</p></div>
         <div className="col text-center infoChooseUs"><img src={gost} className="rounded mx-auto d-block iconСhooseUs" alt="..." /><p className="titleInfoChooseUs">Качество</p><p className="textInfoChooseUs">ГОСТ</p></div>
         <div className="col text-center infoChooseUs"><img src={partner} className="rounded mx-auto d-block iconСhooseUs" alt="..." /><p className="titleInfoChooseUs">Работа с одним</p><p className="textInfoChooseUs">поставщиком</p></div>
         <div className="col text-center infoChooseUs"><img src={plus} className="rounded mx-auto d-block iconСhooseUs" alt="..." /><p className="titleInfoChooseUs">Широкий</p><p className="textInfoChooseUs">ассортимент</p></div>
        </div>
      </div>
       </div>
  )
  }
}

export default ChooseUs;
