import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import './style.css';
import BackgroundImage from './../../assets/images.jpeg';
import { TAB_ITEMS } from './../../constants';
import { Lifestyle } from './../../components/Lifestyle';
import { Mindset } from './../../components/Mindset';
import { Journal } from './../../components/Journal';

export class MindsetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0 // 0: lifestyle, 1: mindset, 2: journal
    }
  }
  
  onTabChange = (event, data) => {
    this.setState({ activeIndex: data.activeIndex });
  };
  
  renderTabContent = () => {
    const { activeIndex } = this.state;
    switch (activeIndex) {
      case 0:
        return (
          <Lifestyle />
        );
      case 1:
        return (
          <Mindset />
        );
      case 2:
        return (
          <Journal />
        );
      default:
        break;
    }
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
            defaultActiveIndex={activeIndex}
          />
        </div>
        {this.renderTabContent()}
      </div>
    )
  }
}