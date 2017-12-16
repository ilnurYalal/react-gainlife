import React, { Component } from 'react';
import { Icon, Button, Label } from 'semantic-ui-react'
import './style.css';


export class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  onClickHelp = () => {
    alert('help');
  };
  
  onClickNotification = () => {
    alert('notification');
  };
  
  render() {
    return (
      <div className="header">
        <h4 className="header-title">
          Power Up
        </h4>
        <div className="header-help">
          <Button labelPosition={"left"} onClick={this.onClickHelp}>
            <Icon name="help circle outline" size={'big'} className="help-icon"></Icon>
          </Button>
          <Button labelPosition={"right"} className="header-notification" onClick={this.onClickNotification}>
            <Icon name="alarm outline" size={'big'} className="alarm-icon"></Icon>
            <Label className="alarm-badge" size='large'>
              2
            </Label>
          </Button>
        </div>
      </div>
    );
  }
}
