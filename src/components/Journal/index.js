import React, { Component } from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';
import UserIcon from './../../assets/icon_user_gray@2x.png';
import { JournalRow } from './../JournalRow';
import './style.css';
export class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  onNewEntry = () => {
    alert('new entry');
  };
  
  renderHeader = () => {
    return (
      <div>
        <div className="journal-tab-header">
          Journal
        </div>
        <div className="journal-tab-header-description">
          Reflect on your progress
        </div>
      </div>
    );
  };
  
  renderSubTitle = () => {
    return (
      <div className="journal-sub-title">
        <div className="journal-sub-title-left">
          My Journal
        </div>
        <Button className="journal-sub-title-right" circular={true} onClick={this.onNewEntry}>
          <Icon name="edit" className="journal-sub-title-icon"/>
          New Entry
        </Button>
      </div>
    )
  };
  
  renderNoJournal = () => {
    return (
      <div>
        <Image src={UserIcon} className="no-content-image"/>
        <br />
        <div className="no-content-description">
          No Journal
        </div>
      </div>
    );
  };
  
  renderJournal = () => {
    return (
      <div className="journal-tab-main-content">
        <JournalRow />
      </div>
    );
  };
  
  render() {
    return (
      <div className="journal-tab">
        {this.renderHeader()}
        {this.renderSubTitle()}
        {this.renderJournal()}
      </div>
    );
  }
}