import React, { Component } from 'react';
import { MindsetTabRow } from '../MindsetTabRow';
import {
  ConfidenceCourageModalDialog,
  NiceJobModalDialog,
  SelectLifestyleModalDialog,
  LifestyleConfidenceModalDialog
} from './../ModalDialog';
import {
  CONFIDENCE_COURAGE,
  NICE_JOB,
  SELECT_LIFESTYLE,
  LIFESTYLE_CONFIDENCE
} from './../../constants';
import './style.css';

export class Mindset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalStatus: 0 // 1: Confidence Modal, 2: Nice Job Modal, 3: Lifestyle Challenge Modal, 4: Confidence Modal
    };
  }
  
  onClickModal = (nextModalStatus) => {
    this.setState({ showModalStatus: nextModalStatus });
  };
  
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
  
  renderIncompleteDescription = () => {
    return (
      <div className="mindset-incomplete-description">
        <div className="mindset-incomplete-descr-header">
          New Activity coming soon
        </div>
        <div className="mindset-incomplete-descr-header mindset-incomplete-descr-body">
          Based on your mindset personalization result, we recommend you to start from here. Explain reason why we recommend this activity.
          Explain reason why we recommend this activity. Explain reason why we recommend this activity
        </div>
      </div>
    );
  };
  
  renderModal = () => {
    const { showModalStatus } = this.state;
    switch (showModalStatus) {
      case 1:
        return (
          <ConfidenceCourageModalDialog
            onContinue={() => this.onClickModal(2)}
            onClose={() => this.onClickModal(0)}
            title={CONFIDENCE_COURAGE.title}
            description={CONFIDENCE_COURAGE.description}
            subTitle={CONFIDENCE_COURAGE.subTitle}
            inputPlaceholder={CONFIDENCE_COURAGE.inputPlaceholder}
            inputTitle={CONFIDENCE_COURAGE.inputTitle}
            buttonName={CONFIDENCE_COURAGE.buttonName}
            leftTitle={CONFIDENCE_COURAGE.leftTitle}
            audioTitle={CONFIDENCE_COURAGE.audioTitle}
          />
        );
      case 2:
        return (
          <NiceJobModalDialog
            onClose={() => this.onClickModal(0)}
            onClick={() => this.onClickModal(3)}
            title={NICE_JOB.title}
            description={NICE_JOB.description}
          />
        );
      case 3:
        return (
          <SelectLifestyleModalDialog
            onContinue={() => this.onClickModal(4)}
            onClose={() => this.onClickModal(0)}
            title={SELECT_LIFESTYLE.title}
            description={SELECT_LIFESTYLE.description}
            buttonName={SELECT_LIFESTYLE.buttonName}
            leftLabel={SELECT_LIFESTYLE.leftLabel}
            rightLabel={SELECT_LIFESTYLE.rightLabel}
          />
        );
      case 4:
        return (
          <LifestyleConfidenceModalDialog
            onCommit={() => this.onClickModal(0)}
            onClose={() => this.onClickModal(0)}
            title={LIFESTYLE_CONFIDENCE.title}
            description={LIFESTYLE_CONFIDENCE.description}
            buttonName={LIFESTYLE_CONFIDENCE.buttonName}
          />
        );
      default:
        break;
    }
    return null;
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
              <MindsetTabRow onClick={() => this.onClickModal(1)} />
              <MindsetTabRow onClick={() => this.onClickModal(1)} />
              <MindsetTabRow onClick={() => this.onClickModal(1)} />
              {this.renderIncompleteDescription()}
            </div>
          </div>
          <div className="mindset-tab-incompleted-content">
            <div className="mindset-incomplete-title">
              Completed
            </div>
            <div className="mindset-incomplete-main-content">
              <MindsetTabRow completed={true} onClick={() => this.onClickModal(1)} />
              <MindsetTabRow completed={true} onClick={() => this.onClickModal(1)} />
              <MindsetTabRow completed={true} onClick={() => this.onClickModal(1)} />
            </div>
          </div>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}