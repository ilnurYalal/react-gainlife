import React, { Component } from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';
import UserIcon from './../../assets/icon_user_gray@2x.png';
import { JournalRow } from './../JournalRow';
import { WriteJournalEntryModalDialog } from './../ModalDialog';
import { WRITE_JOURNAL_ENTRY } from './../../constants';
import BackImg from './../../assets/img_background.jpg'
import './style.css';

export class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalStatus: 0 // 1: Write a Journal
    }
  }
  
  onClickModal = (showModalStatus) => {
    this.setState({ showModalStatus });
  };
  
  onNewEntry = () => {
    this.setState({ showModalStatus: 1 });
  };
  
  onRowClick = () => {
    this.setState({ showModalStatus: 2 });
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
        <JournalRow
          onClick={this.onRowClick}
        />
      </div>
    );
  };
  
  renderJournalModal = () => {
    const { showModalStatus } = this.state;
    switch (showModalStatus) {
      case 1:
        return (
          <WriteJournalEntryModalDialog
            onClose={() => this.onClickModal(0)}
            onFinish={() => this.onClickModal(0)}
            onDelete={() => this.onClickModal(0)}
            onShare={() => alert('onShare')}
            title={WRITE_JOURNAL_ENTRY.title}
            rightTitle={WRITE_JOURNAL_ENTRY.rightTitle}
            rightDescription={WRITE_JOURNAL_ENTRY.rightDescription}
            firstButtonName={WRITE_JOURNAL_ENTRY.firstButtonName}
            secondButtonName={WRITE_JOURNAL_ENTRY.secondButtonName}
            thirdButtonName={WRITE_JOURNAL_ENTRY.thirdButtonName}
            inputPlaceholder={WRITE_JOURNAL_ENTRY.inputPlaceholder}
            fourthButtonName={WRITE_JOURNAL_ENTRY.fourthButtonName}
          />
        );
      case 2:
        return (
          <WriteJournalEntryModalDialog
            onClose={() => this.onClickModal(0)}
            onFinish={() => this.onClickModal(0)}
            onDelete={() => this.onClickModal(0)}
            onShare={() => alert('onShare')}
            description={'I made it to the top of mountain last week I made it to the top of mountain last week I made it to the top of mountain last week'}
            image={BackImg}
            title={WRITE_JOURNAL_ENTRY.title}
            rightTitle={WRITE_JOURNAL_ENTRY.rightTitle}
            rightDescription={WRITE_JOURNAL_ENTRY.rightDescription}
            firstButtonName={WRITE_JOURNAL_ENTRY.firstButtonName}
            secondButtonName={WRITE_JOURNAL_ENTRY.secondButtonName}
            thirdButtonName={WRITE_JOURNAL_ENTRY.thirdButtonName}
            fourthButtonName={WRITE_JOURNAL_ENTRY.fourthButtonName}
            inputPlaceholder={WRITE_JOURNAL_ENTRY.inputPlaceholder}
          />
        );
      default:
        break;
    }
    return null;
  };
  
  render() {
    return (
      <div className="journal-tab">
        {this.renderHeader()}
        {this.renderSubTitle()}
        {this.renderJournal()}
        {this.renderJournalModal()}
      </div>
    );
  }
}