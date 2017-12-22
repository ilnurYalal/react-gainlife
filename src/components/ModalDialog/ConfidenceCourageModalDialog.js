import React, { Component } from 'react';
import { Modal, Button, Image, Form, TextArea } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player';
import Mp3 from './../../assets/cartoon.mp3';
import CloseIcon from './../../assets/icon_close@2x.png';
import PlayIcon from './../../assets/icon_play@2x.png';
import PauseIcon from './../../assets/icon_pause@2x.png';
import './style.css';

export class ConfidenceCourageModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      displayTime: '00:00',
      audioPlayStatus: 0 // 0: initial, 1: play, 2: pause
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
    const { audioPlayStatus } = this.state;
    console.info(this.player.audioEl);
    if (audioPlayStatus === 0) {
      this.player.audioEl.play();
      this.setState({ audioPlayStatus: 1 })
    } else if (audioPlayStatus === 1) {
      this.player.audioEl.pause();
      this.setState({ audioPlayStatus: 2 })
    } else if (audioPlayStatus === 2) {
      this.player.audioEl.play();
      this.setState({ audioPlayStatus: 1 })
    }
  };
  
  onListenAudio = (playSecond) => {
    let totalSecond = Math.round(playSecond);
    const minute = totalSecond / 60 < 10 ? `0${parseInt(totalSecond / 60, 10)}` : parseInt(totalSecond / 60, 10);
    const second = totalSecond % 60 < 10 ? `0${totalSecond % 60}` : totalSecond % 60;
    const displayTime = `${minute} : ${second}`;
    this.setState({ displayTime });
  };
  
  renderLeftContent = () => {
    const { displayTime, audioPlayStatus } = this.state;
    const { description, subTitle, leftTitle, audioTitle } = this.props;
    const mediaIcon = audioPlayStatus === 1 ? `url(${PauseIcon})` : `url(${PlayIcon})`;
    return (
      <div className="left-content">
        <div className="courage-left-title">
          {audioTitle}
        </div>
        <div className="courage-listen-content">
          <div
            className="courage-listen-button"
            style={{ backgroundImage: mediaIcon }}
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

