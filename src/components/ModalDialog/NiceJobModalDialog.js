import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import { CustomModalButton } from './../../components/CustomButton';
import ThumbIcon from './../../assets/icon_thumb@2x.png';
import CloseIcon from './../../assets/icon_close@2x.png';
import './style.css';

export class NiceJobModalDialog extends Component {
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
            Nice Job.
          </div>
          <Image src={ThumbIcon} className="modal-check-icon thumb-icon" />
          <div className="modal-title modal-description">
            {'You can learn a lot from regular reflection.'} <br />
            {`Now it's time to commit to challenging yourself this week!`}
          </div>
          <CustomModalButton name="Choose Lifestyle Challenge" onClick={this.onClick}/>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    );
  }
}