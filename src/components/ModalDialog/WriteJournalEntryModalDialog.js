import React, { Component } from 'react';
import { Image, Modal, Button, TextArea, Form } from 'semantic-ui-react';
import CloseIcon from './../../assets/icon_close@2x.png';
import WhiteCloseIcon from './../../assets/icon_close_white@2x.png';
import CameraIcon from './../../assets/icon_camera@2x.png';
import BackImg from './../../assets/img_background.jpg';
import SmallCameraIcon from './../../assets/icon_small_camera@2x.png';
import './style.css';

export class WriteJournalEntryModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dimmer: 'blurring',
      image: props.image ? props.image : CameraIcon,
      isShowPlaceImage: !props.image,
      description: props.description ? props.description: null
    }
  }
  
  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };
  
  onFinishClick = () => {
    this.props.onFinish();
  };
  
  onDelete = () => {
    this.props.onDelete();
  };
  
  onOpenFile = () => {
    this.refs.fileUploader.click();
  };
  
  onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const image = event.target.files[0];
    console.log(event.target.files);
    const reader  = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      this.setState({ image: reader.result, isShowPlaceImage: false });
    }, false);
  };
  
  onShare = () => {
    this.props.onShare();
  };
  
  onRemoveImg = () => {
    this.setState({ isShowPlaceImage: true, image: CameraIcon });
  };
  
  onChange = (description) => {
    this.setState({ description });
  };
  
  renderLeftContent = () => {
    const { image, isShowPlaceImage } = this.state;
    const imgClassName = isShowPlaceImage ? "camera-place-image" : "camera-place-image real-image";
    const iconClassName = isShowPlaceImage ? "camera-close-icon hidden" : "camera-close-icon";
    return (
      <div className="left-content">
        <div className="center-wrapper">
          <div className="center-content">
            <div
              className={imgClassName}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div
                className={iconClassName}
                style={{ backgroundImage: `url(${WhiteCloseIcon})` }}
                onClick={this.onRemoveImg}
              />
            </div>
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
    const { description } = this.state;
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
            value={description}
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
        <Button className="save-button" circular={true} onClick={this.onFinishClick}>
          Finish
        </Button>
        <br />
        <Button className="skip-button" onClick={this.onDelete}>
          Delete
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