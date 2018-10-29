import React, { Component } from 'react';
import './App.css';
import cn from 'classnames';

class ProductionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active : false
    }

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(e) {
    this.setState({
      active: !e.target.value
    })
  }

  onMouseLeave(e) {
    this.setState({
      active: e.target.value
    })
  }

  render() {
    const switcherClassCard = cn({
      productCard : true,
      active : this.state.active
    })
    const switcherClassImg = cn({
      cardImg : true,
      active : this.state.active
    })
    
    return (
     <div className={switcherClassCard} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}><img className={switcherClassImg} src={this.props.src} />{this.props.title}</div>
    );
  }
}

export default ProductionCard;
