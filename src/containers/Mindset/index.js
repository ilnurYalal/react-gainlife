import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import './style.css';
import BackgroundImage from './../../assets/images.jpeg';
import { TAB_ITEMS } from './../../constants';
import { Lifestyle } from './../../components/Lifestyle';

export class Mindset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }
  
  onTabChange = (event, data) => {
    this.setState({ activeIndex: data.activeIndex });
  };
  
  render() {
    const { activeIndex } = this.state;
    return (
      <div className="mindset-container">
        <div className="top-background-image" style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className="background-container"/>
          <div className="background-title">
            Mindset
          </div>
        </div>
        <div>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={[
              { menuItem: activeIndex === 0 ? TAB_ITEMS[0].toUpperCase() : TAB_ITEMS[0] },
              { menuItem: activeIndex === 1 ? TAB_ITEMS[1].toUpperCase() : TAB_ITEMS[1] },
              { menuItem: activeIndex === 2 ? TAB_ITEMS[2].toUpperCase() : TAB_ITEMS[2] },
            ]}
            className="tab"
            onTabChange={this.onTabChange}
            renderActiveOnly={false}
          />
        </div>
        <Lifestyle />
      </div>
    )
  }
}