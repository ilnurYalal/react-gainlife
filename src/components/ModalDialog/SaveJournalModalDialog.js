import React, { Component } from 'react';
import { Image, Modal, Button } from 'semantic-ui-react';
import { CustomModalButton } from './../../components/CustomButton';
import ModalCheckIcon from './../../assets/icon_modal-check@2x.png';
import CloseIcon from './../../assets/icon_close@2x.png';
import CameraIcon from './../../assets/icon_camera@2x.png';
import SmallCameraIcon from './../../assets/icon_small_camera@2x.png';
import './style.css';

export class SaveJournalModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dimmer: 'blurring',
      image: CameraIcon
    }
  }
  
  onClose = () => {
    this.setState({ open: false });
  };
  
  onSaveClick = () => {
    alert('save');
  };
  
  onSkipClick = () => {
    alert('skip');
  };
  
  onOpenFile = () => {
    this.refs.fileUploader.click();
  };
  
  onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var image = event.target.files[0];
    console.log(event.target.files);
    var reader  = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      this.setState({ image: reader.result });
    }, false);
  };
  
  renderLeftContent = () => {
    const { image } = this.state;
    return (
      <div className="left-content">
        <div className="center-wrapper">
          <div className="center-content">
            <div className="camera-image" style={{ backgroundImage: `url(${image})` }} />
            <Button className="upload-button" onClick={this.onOpenFile}>
              <Image src={SmallCameraIcon} className="camera-icon"/>
              <span className="button-name">Upload Picture</span>
            </Button>
          </div>
          <input
            type="file"
            id="file"
            ref="fileUploader"
            style={{display: "none"}}
            accept="image/*"
            onChange={this.onChangeFile}
          />
        </div>
      </div>
    )
  };
  
  renderRightContent = () => {
    return (
      <div className="right-content">
  
      </div>
    );
  };
  
  renderContent = () => {
    return (
      <Modal.Content className="modal-content save-modal-content">
        <div className="modal-title save-modal">
          Journal Entry
        </div>
        <div className="save-modal-main-content">
          {this.renderLeftContent()}
          {this.renderRightContent()}
        </div>
        <Button className="save-button" circular={true} onClick={this.onSaveClick}>
          Save
        </Button>
        <br />
        <Button className="skip-button" onClick={this.onSkipClick}>
          skip journal for now
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
  };
}