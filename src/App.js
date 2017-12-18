import React, { Component } from 'react';
import './App.css';
import { MenuLayout } from './components/Layout/MenuLayout';
import { SideMenu } from './components/examples/SideMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MenuLayout />
      </div>
    );
  }
}

export default App;
