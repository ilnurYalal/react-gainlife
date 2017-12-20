import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import { CustomModalButton } from './../../components/CustomButton';
import ThumbIcon from './../../assets/icon_thumb@2x.png';
import CloseIcon from './../../assets/icon_close@2x.png';
import './style.scss';

export class ShareModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dimmer: 'blurring'
    }
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onClick = () => {
    this.props.onClick();
  };
  
  render() {
    const { open, dimmer } = this.state;
    const { title, description, buttonName } = this.props;
    return (
      <Modal dimmer={dimmer} open={open} onClose={this.onClose} className="modal-dialog">
        <Modal.Content className="modal-content">
          <div className="modal-title">
            {title}
          </div>
          <Image src={ThumbIcon} className="modal-check-icon thumb-icon" />
          <div className="modal-title modal-description">
            {description}
          </div>
          <CustomModalButton name={buttonName} onClick={this.onClick}/>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    );
  }
}