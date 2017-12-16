import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import { CustomModalButton } from './../../components/CustomButton';
import ModalCheckIcon from './../../assets/icon_modal-check@2x.png';
import CloseIcon from './../../assets/icon_close@2x.png';
import style from './style.scss';


export class WriteJournalModalDialog extends Component {
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
        <Modal.Content className={`${style.modalContent} a`}>
          <div className="modal-title">
            You Did It!
          </div>
          <Image src={ModalCheckIcon} className="modal-check-icon" />
          <div className="modal-title modal-description">
            Getting outside your comfort zone takes some work - but it's well worth it!
          </div>
          <CustomModalButton name="Write a journal entry" onClick={this.onClick}/>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    );
  }
}