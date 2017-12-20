import React, { Component } from 'react';
import { CustomButton } from './../CustomButton';
import { Image } from 'semantic-ui-react';
import { GET_STARTED_DESCRIPTION } from './../../constants';
import UserIcon from './../../assets/icon_user@2x.png';
import PlayIcon from './../../assets/icon_play@2x.png';
import RunIcon from './../../assets/icon_run@2x.png';
import './style.css';

export class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  renderLeftContent = () => {
    return (
      <div className="left-content column">
        <Image src={UserIcon} className="left-content-img"/>
        <h4 className="content-title">
          Welcome to
        </h4>
        <h2 className="content-title1">
          Mindset!
        </h2>
        <h6 className="content-description">
          Based on your results, we've built a personalized
          course to stregthen your mindset
        </h6>
      </div>
    );
  };
  
  renderRightContent = () => {
    return GET_STARTED_DESCRIPTION.map((item, index) => {
      return (
        <div className="right-content-item" key={`key-${index}`}>
          <Image src={index=== 0 ? PlayIcon : RunIcon} className="right-content-item-image"/>
          <h6 className="content-description">
            {item.text}
          </h6>
        </div>
      );
    })
  };
  
  onGetStarted = () => {
    this.props.updatePage(1);
  };
  
  render() {
    return (
      <div className="get-started">
        <div className="center-wrapper">
          <div className="center-content">
            <h4 className="get-started-title">
              Mindset
            </h4>
            <div className="ui padded two column grid content">
              {this.renderLeftContent()}
              <div className="right-content column">
                <h4 className="right-title">
                  Here's How it works
                </h4>
                {this.renderRightContent()}
              </div>
            </div>
            <div className="bottom-content">
              <CustomButton name="Get Started" className="btn-get-started" onClick={this.onGetStarted}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}