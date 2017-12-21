import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import CloseIcon from './../../assets/icon_close_white@2x.png';
import BackImg from './../../assets/img_background1.png';
import './style.css';

export class LifestyleConfidenceModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dimmer: 'blurring'
    };
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onCommit = () => {
    this.props.onCommit();
  };
  
  render() {
    const { open, dimmer } = this.state;
    const { title, description, buttonName } = this.props;
    return (
      <Modal dimmer={dimmer} open={open} onClose={this.onClose} className="modal-dialog">
        <Modal.Content className="modal-content lifestyle-confidence-content">
          <div className="confidence-background-image" style={{ backgroundImage: `url(${BackImg})` }}>
            <div className="confidence-title">
              {title}
            </div>
            <div className="confidence-title confidence-description">
              {description}
            </div>
            <Button className="save-button lifestyle-confidence-button" circular={true} onClick={this.onCommit}>
              {buttonName}
            </Button>
          </div>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    )
  }
}