import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import { CustomModalButton } from './../../components/CustomButton';
import ModalCheckIcon from './../../assets/icon_modal-check@2x.png';
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
    return (
      <Modal dimmer={dimmer} open={open} onClose={this.onClose} className="modal-dialog">
        <Modal.Content className="modal-content">
          <div className="modal-title">
            Thanks for sharing!
          </div>
          <Image src={ModalCheckIcon} className="modal-check-icon" />
          <div className="modal-title modal-description">
            Sharing your journey keeps you accountable and inspires you peers!
          </div>
          <CustomModalButton name="Go to Social Feed" onClick={this.onClick}/>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    );
  }
}