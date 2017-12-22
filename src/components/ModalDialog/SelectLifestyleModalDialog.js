import React, { Component } from 'react';
import { Image, Modal, Button, TextArea } from 'semantic-ui-react';
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
      selctedIndex: -1,
      rightLabel: props.rightLabel ? props.rightLabel : ''
    };
    this.textArea = null;
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onClick = (selctedIndex) => {
    this.setState({ selctedIndex });
    if (selctedIndex === 1) {
      this.textArea.focus();
    }
  };
  
  onContinueClick = () => {
    const { rightLabel, selctedIndex } = this.state;
    if (selctedIndex === 1) {
      this.props.onContinue(rightLabel);
    } else if (selctedIndex === 0) {
      this.props.onContinue(null);
    }
  };
  
  onChangeRightLabel = (e) => {
    this.setState({ rightLabel: e.target.value });
  };
  
  renderMainContent = () => {
    const { selctedIndex, rightLabel } = this.state;
    const { leftLabel } = this.props;
    return (
      <div className="select-modal-main-content">
        <div
          className={selctedIndex === 0 ? "select-modal-left-content select-modal-border" : "select-modal-left-content"}
          style={{ backgroundImage: `url(${BackImgLeft})` }}
          onClick={() => this.onClick(0)}
        >
          <div>
            {leftLabel}
          </div>
        </div>
        <div
          className={selctedIndex === 1 ? "select-modal-left-content select-modal-right-content select-modal-border" : "select-modal-left-content select-modal-right-content"}
          style={{ backgroundImage: `url(${BackImgRight})` }}
          onClick={() => this.onClick(1)}
        >
          <TextArea
            className="select-modal-text-area"
            autoHeight={true}
            value={rightLabel}
            onChange={this.onChangeRightLabel}
            ref={(ref) => { this.textArea = ref; }}
          />
          <div className="select-modal-right-bottom-border" />
        </div>
      </div>
    );
  };
  
  renderContent = () => {
    const { title, description, buttonName } = this.props;
    return (
      <Modal.Content className="modal-content save-modal-content">
        <div className="modal-title save-modal">
          {title}
        </div>
        <div className="select-lifestyle-description">
          {description}
        </div>
        {this.renderMainContent()}
        <Button className="save-button" circular={true} onClick={this.onContinueClick}>
          {buttonName}
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
