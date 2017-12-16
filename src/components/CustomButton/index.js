import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react'
import CheckIcon from './../../assets/icon_check@2x.png';
import CheckedIcon from './../../assets/icon_checked@2x.png';
import './style.css';

export class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <Button
        className="ui button circular btn-get-started"
        onClick={this.props.onClick}
      >
        {this.props.name}
        </Button>
    );
  }
}

export class CustomModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <Button
        className="ui button circular btn-get-started modal-button"
        onClick={this.props.onClick}
      >
        {this.props.name}
      </Button>
    );
  }
}

export class AddLifestyleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <Button className="lifestyle-button" onClick={this.props.onClick}>Add your own Lifestyle Challenge</Button>
    )
  }
}

export class LifestyleIncompltedRowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Button className="lifestyle-incomplete-row-button" onClick={this.props.onClick}>
        <Image src={CheckIcon} className="check-icon"/>
        <div className="incomplete-row-info">
          <div>
            Challenge1
          </div>
          <div className="incomplete-row-description">
            {this.props.description}
          </div>
        </div>
      </Button>
    );
  }
}

export class LifestyleCompleteRowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  
  render() {
    return (
      <Button className="lifestyle-complete-row-button" onClick={this.props.onClick}>
        <Image src={CheckedIcon} className="check-icon"/>
        <div className="incomplete-row-info">
          <div>
            Challenge1
          </div>
          <div className="incomplete-row-description">
            {this.props.description}
          </div>
        </div>
        <div className="complete-date">
          Jun 23
        </div>
      </Button>
    );
  }
}