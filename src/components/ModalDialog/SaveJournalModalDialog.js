import React, { Component } from 'react';
import { Image, Modal, Button, TextArea, Form } from 'semantic-ui-react';
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
      image: CameraIcon,
      isShowPlaceImage: true
    }
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onSaveClick = () => {
    this.props.onSave();
  };
  
  onSkipClick = () => {
    this.props.onSkip();
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
      this.setState({ image: reader.result, isShowPlaceImage: false });
    }, false);
  };
  
  onShare = () => {
    this.props.onShare();
  };
  
  renderLeftContent = () => {
    const { image, isShowPlaceImage } = this.state;
    const className = isShowPlaceImage ? "camera-place-image" : "camera-place-image real-image";
    return (
      <div className="left-content">
        <div className="center-wrapper">
          <div className="center-content">
            <div
              className={className}
              style={{ backgroundImage: `url(${image})` }}
            />
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
        <div className="save-journal-modal-right-title">
          Lifestyle Challenge - Confidence
        </div>
        <div className="save-journal-modal-right-description">
          Make it to the top mountain on the weekend hike.
        </div>
        <Form className="form-textarea">
          <TextArea
            placeholder="How did it go?"
            className="addlifestyle-textarea"
            onChange={this.onChange}
          />
        </Form>
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
        <Button className="journal-share-button" onClick={this.onShare}>
          Share
        </Button>
      </Modal>
    )
  };
}