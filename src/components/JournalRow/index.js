import React, { Component } from 'react';
import BackImg from './../../assets/img_background.jpg'
import './style.css';

export class JournalRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="journal-row-content">
        <div className="journal-row-content-main-content">
          <div className="center-wrapper">
            <div className="center-content">
              <div className="journal-row-content-title">
                Lifestyle Challenge - Confidence
              </div>
              <div className="journal-row-content-title journal-row-content-description">
                Make it to the top of mountain on the weekend hike.Make it to the top of mountain on the weekend hike.
              </div>
            </div>
          </div>
        </div>
        <div className="journal-row-content-img" style={{ backgroundImage: `url(${BackImg})` }}>
        
        </div>
        <div className="journal-row-content-date">
        
        </div>
      </div>
    )
  }
}