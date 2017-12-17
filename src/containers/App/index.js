import React, { Component } from 'react';
import { Header } from './../../components/Header';
import { NavigationBar } from './../../components/NavigationBar';
import { GetStarted } from './../../components/GetStarted';
import { MindsetContainer } from './../MindsetContainer';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }
  updatePage = (index) => {
    this.setState({ index });
  };
  
  render() {
    const { index } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="app-main">
          <NavigationBar />
          {index === 0 && <GetStarted updatePage={this.updatePage}/>}
          {index === 1 && <MindsetContainer />}
        </div>
      </div>
    );
  }
}

export default App;
