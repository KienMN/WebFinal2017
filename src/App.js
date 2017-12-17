import React, { Component } from 'react';
import './App.css';
import { CreateRequestForm } from './components/Form/CreateRequestForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> </div>
        <div style={{margin: 50}}>
          <CreateRequestForm />
        </div>
      </div>
    );
  }
}

export default App;
