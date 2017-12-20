import React, { Component } from 'react';
import { Modal, Button, Image, Form, TextArea } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player';
import Mp3 from './../../assets/cartoon.mp3';
import CloseIcon from './../../assets/icon_close@2x.png';
import PlayIcon from './../../assets/icon_play@2x.png';
import './style.css';

export class ConfidenceCourageModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      displayTime: '00:00'
    };
    this.player = null;
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
  
  playAudio = () => {
    this.player.audioEl.play();
  };
  
  onListenAudio = (playSecond) => {
    let totalSecond = Math.round(playSecond);
    const minute = totalSecond / 60 < 10 ? `0${parseInt(totalSecond / 60, 10)}` : parseInt(totalSecond / 60, 10);
    const second = totalSecond % 60 < 10 ? `0${totalSecond % 60}` : totalSecond % 60;
    const displayTime = `${minute} : ${second}`;
    this.setState({ displayTime });
  };
  
  renderLeftContent = () => {
    const { displayTime } = this.state;
    const { description, subTitle, leftTitle, audioTitle } = this.props;
    return (
      <div className="left-content">
        <div className="courage-left-title">
          {audioTitle}
        </div>
        <div className="courage-listen-content">
          <div
            className="courage-listen-button"
            style={{ backgroundImage: `url(${PlayIcon})` }}
            onClick={this.playAudio}
          >
            <div className="courage-listen-label">
              {displayTime}
            </div>
          </div>
        </div>
        <div className="courage-left-title">
          {leftTitle}
        </div>
        <div className="courage-left-description">
          {subTitle}
          <div className="courage-left-sub-description">
            {description}
          </div>
        </div>
      </div>
    );
  };
  
  renderRightContent = () => {
    const { inputTitle, inputPlaceholder } = this.props;
    return (
      <div className="right-content">
        <div className="save-journal-modal-right-title">
          {inputTitle}
        </div>
        <Form className="form-textarea">
          <TextArea
            placeholder={inputPlaceholder}
            className="addlifestyle-textarea courage-textarea"
            onChange={this.onChange}
          />
        </Form>
      </div>
    );
  };
  
  render() {
    const { open } = this.state;
    const { title, buttonName } = this.props;
    return (
      <Modal dimmer="blurring" open={open} onClose={this.onClose} className="modal-dialog save-modal">
        <Modal.Content className="modal-content save-modal-content">
          <div className="modal-title save-modal">
            {title}
          </div>
          <div className="save-modal-main-content confidence">
            {this.renderLeftContent()}
            {this.renderRightContent()}
          </div>
          <Button className="save-button" circular={true} onClick={this.onContinueClick}>
            {buttonName}
          </Button>
        </Modal.Content>
        <Button className="modal-close-button" onClick={this.onClose}>
          <Image src={CloseIcon} className="modal-close-image" />
        </Button>
        <ReactAudioPlayer
          src={Mp3}
          ref={(element) => { this.player = element; }}
          onListen={this.onListenAudio}
          listenInterval={1000}
        />
      </Modal>
    )
  }
}

