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
  SaveJournalModalDialog,
  ShareModalDialog
} from './../ModalDialog';
import UserIcon from './../../assets/icon_user_gray@2x.png';
import BackImg from './../../assets/img_background1.png';
import { AddLifestyleDialog } from './../AddLifestyleDialog';
import {
  WRITE_JOURNAL,
  SAVE_JOURNAL_ENTRY,
  SHARE
} from './../../constants';

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
      showModalStatus: 0 // 0: None Modal,  1: Write Journal Modal, 2: Save Journal Modal, 3: Share Modal
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
    this.setState({ showModalStatus: 1 });
  };
  
  onClickModal = (showModalStatus) => {
    this.setState({ showModalStatus });
  };
  
  renderNoCompleteContent = () => {
    return (
      <div>
        <Image src={UserIcon} className="no-content-image"/>
        <br />
        <h5 className="no-content-description">
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
              onClick={() => this.onClickModal(4)}
            />
          )}
        </div>
      );
    }
    return this.renderNoCompleteContent();
  };
  
  renderJournalModal = () => {
    const { showModalStatus } = this.state;
    if (showModalStatus === 1) {
      return (
        <WriteJournalModalDialog
          onClose={() => this.onClickModal(0)}
          onClick={() => this.onClickModal(2)}
          title={WRITE_JOURNAL.title}
          description={WRITE_JOURNAL.description}
          buttonName={WRITE_JOURNAL.buttonName}
        />
      );
    } else if (showModalStatus === 2) {
      return (
        <SaveJournalModalDialog
          onSave={() => this.onClickModal(0)}
          onClose={() => this.onClickModal(0)}
          onShare={() => this.onClickModal(3)}
          onSkip={() => alert('skip')}
          title={SAVE_JOURNAL_ENTRY.title}
          rightTitle={SAVE_JOURNAL_ENTRY.rightTitle}
          rightDescription={SAVE_JOURNAL_ENTRY.rightDescription}
          firstButtonName={SAVE_JOURNAL_ENTRY.firstButtonName}
          secondButtonName={SAVE_JOURNAL_ENTRY.secondButtonName}
          thirdButtonName={SAVE_JOURNAL_ENTRY.thirdButtonName}
          fourthButtonName={SAVE_JOURNAL_ENTRY.fourthButtonName}
          inputPlaceholder={SAVE_JOURNAL_ENTRY.inputPlaceholder}
        />
      );
    } else if (showModalStatus === 3) {
      return (
        <ShareModalDialog
          onClose={() => this.onClickModal(0)}
          onClick={() => this.onClickModal(0)}
          title={SHARE.title}
          description={SHARE.description}
          buttonName={SHARE.buttonName}
        />
      );
    } else if (showModalStatus === 4) {
      return (
        <SaveJournalModalDialog
          onSave={() => this.onClickModal(0)}
          onClose={() => this.onClickModal(0)}
          onShare={() => this.onClickModal(3)}
          onSkip={() => alert('skip')}
          title={SAVE_JOURNAL_ENTRY.title}
          rightTitle={SAVE_JOURNAL_ENTRY.rightTitle}
          rightDescription={SAVE_JOURNAL_ENTRY.rightDescription}
          firstButtonName={SAVE_JOURNAL_ENTRY.firstButtonName}
          secondButtonName={SAVE_JOURNAL_ENTRY.secondButtonName}
          thirdButtonName={SAVE_JOURNAL_ENTRY.thirdButtonName}
          fourthButtonName={SAVE_JOURNAL_ENTRY.fourthButtonName}
          inputPlaceholder={SAVE_JOURNAL_ENTRY.inputPlaceholder}
          image={BackImg}
          description={SAVE_JOURNAL_ENTRY.description}
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