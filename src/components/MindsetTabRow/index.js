import React, { Component } from 'react';
import MindsetActivityIcon from './../../assets/img_mindset_activity@2x.png';
import CheckIcon from './../../assets/icon_white_check@2x.png';
import { Image, Button } from 'semantic-ui-react';
import './style.css';

export class MindsetTabRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCheckIcon: !!props.completed
    }
  }
  
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
  
  render() {
    const { isShowCheckIcon } = this.state;
    return (
      <Button className="mindset-incompleted-row" onClick={this.onClick} >
        <div className="mindest-incompleted-row-title">
          Confidence - Courage
        </div>
        <div className="mindest-incompleted-row-description">
          Introduction to this activity intro copy is here intro copy is here intro copy is here intro copy is here
        </div>
        <div className="mindset-incompleted-button">
          <div className="mindset-incompleted-row-background">
            <Image src={MindsetActivityIcon} className="mindset-incompleted-row-icon"/>
          </div>
        </div>
        {isShowCheckIcon && <Image src={CheckIcon} className="mindset-row-check-icon"/>}
      </Button>
    );
  }
}