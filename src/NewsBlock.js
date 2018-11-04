import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import newsImage1 from './newsImages/newsImage1.jpg';
import newsImage2 from './newsImages/newsImage2.jpg';
import newsImage3 from './newsImages/newsImage3.jpg';
import newsImage4 from './newsImages/newsImage4.jpg';

const newsItems = [
  {
    src: newsImage1,
    title: "Ищем поставщиков кормового зерна",
    text: "Приглашаем к сотрудничеству поставщиков пшеницы, ячменя, гороха в Пермском крае, Республике Башкортостан, Оренбургской, Челябинской, Свердловской, Курганской областях."
  },
  {
    src: newsImage2,
    title: "Закупаем рапс",
    text : "На постоянной основе ведем закупку рапса на следующих элеваторах: Куркачинское ХПП (Республика Татарстан), Клявлинское ХПП (Самарская область), ООО «НоваТрейд» (Республика Башкортостан), Сергачский элеватор (Нижегородская область)"
  },
  {
    src: newsImage3,
    title: "Приглашаем к сотрудничеству",
    text: "Приглашаем к сотрудничеству на выгодных условиях: сельхозпроизводителей и перевозчиков зерна."
  },
  {
    src: newsImage4,
    title: "Ведем закупку",
    text: "Закупаем с хозяйств и на элеваторах: пшеницу, горох, рапс, ячмень, рыжик, гречиху, подсолнечник."
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

      <div className="card mb-3 mainBlockNews" style={{width:"75vh"}} key={index}>
      <img className="card-img-top" src={item.src} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title" style={{color:"#ff4444"}}>{item.title}</h5>
        <p className="card-text">{item.text}</p>
      </div>
    </div>
  );

     return (
       <div className="container">
        <ScrollableAnchor id={'section5'}><div></div></ScrollableAnchor>
       <h3 className="text-center titleNews lead" style={{fontSize : "3vh", fontWeight : "bold", color : "#ff4444"}}>Последние новости</h3>
        <div className="d-flex justify-content-center">
        {cardContent[this.state.index]}
       </div>
        <div className="d-flex justify-content-center" style={{marginTop : "2vmin"}}>
         <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-success btnNews" onClick={this.prevHandleClick}>Назад</button>
          <button type="button" className="btn btn-outline-success btnNews" onClick={this.nextHandleClick}>Вперед</button>
         </div>
        </div>
       </div>

    );
  }
}

export default NewsBlock;
