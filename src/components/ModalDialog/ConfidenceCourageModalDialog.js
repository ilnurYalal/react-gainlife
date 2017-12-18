import React, { Component } from 'react';
import { Modal, Button, Image, Form, TextArea } from 'semantic-ui-react';
import CloseIcon from './../../assets/icon_close@2x.png';
import PlayIcon from './../../assets/icon_play@2x.png';
import './style.css';

export class ConfidenceCourageModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onChange = (e) => {
    console.info(e.target);
  };
  
  onContinueClick = () => {
    this.props.onContinue();
  };
  
  renderLeftContent = () => {
    return (
      <div className="left-content">
        <div className="courage-left-title">
          Listen to the audio
        </div>
        <div className="courage-listen-content">
          <div
            className="courage-listen-button"
            style={{ backgroundImage: `url(${PlayIcon})` }}
            onClick={() => alert('click')}
          >
            <div className="courage-listen-label">
              00 : 00
            </div>
          </div>
        </div>
        <div className="courage-left-title">
          Read the transcript
        </div>
        <div className="courage-left-description">
          Welcome to your new mindset class!
          <div className="courage-left-sub-description">
            {'The LASIK surgeon uses computer software to guide the IntraLase laser beam, ' +
            'which applies a series of tiny (3-micron-diameter) bubbles within the central layer' +
            'of the cornea. The resulting cornea flap is created at a precise depth and diameter ' +
            'pre-determined by the surgeon. As occurs with a mechanical microkeratome, a small ' +
            'section of tissue at one edge of the flap is left uncut, forming a hinge that allows' +
            ' the surgeon to fold back the flap so that the cornea can be accessed and reshaped' +
            ' for vison'}
          </div>
        </div>
      </div>
    );
  };
  
  renderRightContent = () => {
    return (
      <div className="right-content">
        <div className="save-journal-modal-right-title">
          Lifestyle Challenge - Confidence
        </div>
        <Form className="form-textarea">
          <TextArea
            placeholder="What did this Mindset Activity bring to mind?"
            className="addlifestyle-textarea courage-textarea"
            onChange={this.onChange}
          />
        </Form>
      </div>
    );
  };
  
  render() {
    const { open } = this.state;
    return (
      <Modal dimmer="blurring" open={open} onClose={this.onClose} className="modal-dialog save-modal">
        <Modal.Content className="modal-content save-modal-content">
          <div className="modal-title save-modal">
            Confidence - Courage
          </div>
          <div className="save-modal-main-content confidence">
            {this.renderLeftContent()}
            {this.renderRightContent()}
          </div>
          <Button className="save-button" circular={true} onClick={this.onContinueClick}>
            Continue
          </Button>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
      </Modal>
    )
  }
}

