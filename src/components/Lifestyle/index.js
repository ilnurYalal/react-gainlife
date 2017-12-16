import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import './style.css';
import { TAB_ITEMS } from './../../constants';
import {
  AddLifestyleButton,
  LifestyleIncompltedRowButton,
  LifestyleCompleteRowButton
} from './../CustomButton';
import {
  WriteJournalModalDialog,
  SaveJournalModalDialog
} from './../ModalDialog';
import UserIcon from './../../assets/icon_user_gray@2x.png';
import { AddLifestyleDialog } from './../AddLifestyleDialog';

export class Lifestyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAddLifestyleDialog: false,
      inCompletedLifestyles: [],
      completeLifestyles: [
        'Make it to the top mountain on the weekend hike.',
        'Make it to the top mountain on the weekend hike.',
        'Make it to the top mountain on the weekend hike.'
      ],
      isShowWriteJournalModal: false,
      isShowModalStatus: 1 // 0: None Modal,  1: Write Journal Modal, 2: Save Journal Modal
    }
  }
  
  onAddLifestyleClick = () => {
    this.setState({ isShowAddLifestyleDialog: true });
  };
  
  onAddLifestyle = (lifestyleDescription) => {
    const { inCompletedLifestyles } = this.state;
    const newIncompletedLifestyles = [...inCompletedLifestyles];
    newIncompletedLifestyles.push(lifestyleDescription);
    // alert(lifestyleDescription);
    this.setState({ isShowAddLifestyleDialog: false, inCompletedLifestyles: newIncompletedLifestyles });
  };
  
  onClickIncompleteRow = () => {
    this.setState({ isShowModalStatus: 1 });
  };
  
  onClickModal = (isShowModalStatus) => {
    this.setState({ isShowModalStatus });
  };
  
  renderNoCompleteContent = () => {
    return (
      <div>
        <Image src={UserIcon} className="no-content-image"/>
        <br />
        <h5 className="no-content-description light">
          No current Lifestyle Challenges. Visit Mindset Activity to unlock weekly challenges.
        </h5>
      </div>
    );
  };
  
  renderLifestyleIncomplete = () => {
    const { inCompletedLifestyles } = this.state;
    if (inCompletedLifestyles.length) {
      return inCompletedLifestyles.map((row, index) =>
        <LifestyleIncompltedRowButton
          onClick={this.onClickIncompleteRow}
          description={row}
          key={`key-${index}`}
        />
      );
    }
    return null;
  };
  
  renderLifestyleComplete = () => {
    const { completeLifestyles } = this.state;
    if (completeLifestyles.length) {
      return (
        <div className="lifestyle-incomplete-row">
          {completeLifestyles.map((row, index) =>
            <LifestyleCompleteRowButton
              description={row}
              key={`key-${index}`}
            />
          )}
        </div>
      );
    }
    return this.renderNoCompleteContent();
  };
  
  renderJournalModal = () => {
    const { isShowModalStatus } = this.state;
    if (isShowModalStatus === 1) {
      return (
        <WriteJournalModalDialog
          onClose={() => this.onClickModal(0)}
          onClick={() => this.onClickModal(2)}
        />
      );
    } else if (isShowModalStatus === 2) {
      return (
        <SaveJournalModalDialog
        />
      );
    }
    return null;
  };
  
  render() {
    const { isShowAddLifestyleDialog } = this.state;
    return (
      <div className="lifestyle-container">
        <div className="title">
          {TAB_ITEMS[0]}
        </div>
        <div className="lifestyle-content">
          <div className="lifestyle-incomplete-container">
            {!isShowAddLifestyleDialog && <AddLifestyleButton onClick={this.onAddLifestyleClick}/>}
            {isShowAddLifestyleDialog && <AddLifestyleDialog onClick={this.onAddLifestyle}/>}
            <div className="incomplete-container">
              Incompleted
            </div>
            <div className="lifestyle-incomplete-row">
              {this.renderLifestyleIncomplete()}
            </div>
          </div>
          <div className="lifestyle-complete-container">
            <div className="complete-container">
              Completed
            </div>
            {this.renderLifestyleComplete()}
          </div>
        </div>
        {this.renderJournalModal()}
      </div>
    );
  }
}