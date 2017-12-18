import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import CloseIcon from './../../assets/icon_close@2x.png';
import BackImgLeft from './../../assets/img_background.jpg';
import BackImgRight from './../../assets/img_background1.png';
import './style.css';

export class SelectLifestyleModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dimmer: 'blurring',
      selctedIndex: -1
    }
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onClick = (selctedIndex) => {
    this.setState({ selctedIndex });
  };
  
  onContinueClick = () => {
    this.props.onContinue();
  };
  
  renderMainContent = () => {
    const { selctedIndex } = this.state;
    return (
      <div className="select-modal-main-content">
        <div
          className={selctedIndex === 0 ? "select-modal-left-content select-modal-border" : "select-modal-left-content"}
          style={{ backgroundImage: `url(${BackImgLeft})` }}
          onClick={() => this.onClick(0)}
        >
          <div>
            Tray a high-intensity gym class
          </div>
        </div>
        <div
          className={selctedIndex === 1 ? "select-modal-left-content select-modal-right-content select-modal-border" : "select-modal-left-content select-modal-right-content"}
          style={{ backgroundImage: `url(${BackImgRight})` }}
          onClick={() => this.onClick(1)}
        >
          <div>
            Make it to the top mountain on the weekend hike
          </div>
          <div className="select-modal-right-bottom-border" />
        </div>
      </div>
    );
  };
  
  renderContent = () => {
    return (
      <Modal.Content className="modal-content save-modal-content">
        <div className="modal-title save-modal">
          Lifestyle Challenge
        </div>
        <div className="select-lifestyle-description">
          Set a goal to get out of your comfort zone this week
        </div>
        {this.renderMainContent()}
        <Button className="save-button" circular={true} onClick={this.onContinueClick}>
          Continue
        </Button>
      </Modal.Content>
    )
  };
  
  render() {
    const { open, dimmer } = this.state;
    return (
      <Modal dimmer={dimmer} open={open} onClose={this.onClose} className="modal-dialog save-modal">
        {this.renderContent()}
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    )
  }
}
