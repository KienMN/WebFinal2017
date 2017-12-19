import React, { Component } from 'react';
import './App.css';
import { MenuLayout } from './components/Layout/MenuLayout';


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
