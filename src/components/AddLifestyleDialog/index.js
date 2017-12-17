import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import './style.css';

export class AddLifestyleDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabledBtn: true,
      lifestyleDescription: ''
    }
  }
  
  onChange = (event, data) => {
    const { lifestyleDescription } = this.state;
    if (data.value === '') {
      this.setState({ isDisabledBtn: true, lifestyleDescription: data.value });
    } else {
      if (lifestyleDescription === '') {
        this.setState({ lifestyleDescription: data.value, isDisabledBtn: false });
      } else {
        this.setState({ lifestyleDescription: data.value });
      }
    }
  };
  
  onClick = () => {
    const { lifestyleDescription } = this.state;
    this.props.onClick(lifestyleDescription)
  };
  
  render() {
    const { isDisabledBtn } = this.state;
    return (
      <div className="lifestyle-dialog">
        <Form>
          <TextArea
            placeholder="Add your own Lifestyle Challenge"
            rows={2}
            className="addlifestyle-textarea"
            onChange={this.onChange}
          />
        </Form>
        <Button circular={true} className="addlifestyle-btn" disabled={isDisabledBtn} onClick={this.onClick}>
          Save
        </Button>
      </div>
    )
  }
}