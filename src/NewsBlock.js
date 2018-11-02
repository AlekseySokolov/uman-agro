import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import testImg from './test2.png';
import cn from 'classnames';

const newsItems = [
  {
    src: testImg,
    title: "Заголовок один",
    text: "тестовый текст номер один"
  },
  {
    src: testImg,
    title: "Заголовок два",
    text : "тестовый текст номер два"
  },
  {
    src: testImg,
    title: "Заголовок три",
    text: "тестовый текст номер три"
  }
];

class NewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    index : 0
    }
    this.prevHandleClick = this.prevHandleClick.bind(this);
    this.nextHandleClick = this.nextHandleClick.bind(this);
  }

  prevHandleClick() {
    const lastIndex = newsItems.length - 1;
    const activeIndex = this.state.index;
    this.setState({
      index : (activeIndex === 0) ? lastIndex : activeIndex - 1
    })
  }

  nextHandleClick() {
    const lastIndex = newsItems.length - 1;
    const activeIndex = this.state.index;
    this.setState({
      index : (activeIndex === lastIndex) ? 0 : activeIndex + 1
    })
  }

   render() {
     const cardContent = newsItems.map((item, index) =>

      <div className="card mb-3" style={{width:"65vh"}} key={index}>
      <img className="card-img-top" src={item.src} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title" style={{color:"#d9534f"}}>{item.title}</h5>
        <p className="card-text">{item.text}</p>
      </div>
    </div>
  );

     return (
       <div className="container">
       <h3 className="text-center titleNews lead" style={{fontSize : "3vh", color : "#202020"}}>Последние новости</h3>
        <div className="d-flex justify-content-center">
        {cardContent[this.state.index]}
       </div>
        <div className="d-flex justify-content-center" style={{marginTop : "2vmin"}}>
         <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light btnNews" onClick={this.prevHandleClick}>Назад</button>
          <button type="button" className="btn btn-light btnNews" onClick={this.nextHandleClick}>Вперед</button>
         </div>
        </div>
       </div>

    );
  }
}

export default NewsBlock;
