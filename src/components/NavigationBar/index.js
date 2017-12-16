import React, { Component } from 'react';
import './style.css';
import imgAvtar from './../../assets/image.png';

export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="side-navigation-bar">
        <div style={{ backgroundImage: `url(${imgAvtar})` }} className="avatar-img" />
        <h4 className="username">
          Username
        </h4>
      </div>
    );
  }
}