import React, { Component } from 'react';
import { MindsetTabRow } from '../MindsetTabRow';
import './style.css';

export class Mindset extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  renderHeader = () => {
    return (
      <div>
        <div className="mindset-tab-header">
          Mindset Activities
        </div>
        <div className="mindset-tab-header-description">
          Based on your mindset personalization result, we recommend you to start from here.
          <br />
          Explain reason why we recommend this activity
        </div>
      </div>
    );
  };
  
  render() {
    return (
      <div className="mindset-tab">
        {this.renderHeader()}
        <div className="mindset-tab-scroll">
          <div className="mindset-tab-incompleted-content">
            <div className="mindset-incomplete-title">
              Incompleted
            </div>
            <div className="mindset-incomplete-main-content">
              <MindsetTabRow />
              <div className="mindset-incomplete-description">
                <div className="mindset-incomplete-descr-header">
                  New Activity coming soon
                </div>
                <div className="mindset-incomplete-descr-header mindset-incomplete-descr-body">
                  Based on your mindset personalization result, we recommend you to start from here. Explain reason why we recommend this activity.
                  Explain reason why we recommend this activity. Explain reason why we recommend this activity
                </div>
              </div>
            </div>
          </div>
          <div className="mindset-tab-incompleted-content">
            <div className="mindset-incomplete-title">
              Completed
            </div>
            <div className="mindset-incomplete-main-content">
              <MindsetTabRow completed={true} />
              <MindsetTabRow completed={true} />
              <MindsetTabRow completed={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}