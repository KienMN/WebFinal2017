import React, { Component } from 'react';
import './App.css';
import {SubSideMenu} from './components/SideMenu/SubSideMenu'
import { ContentBoard } from './components/Board/ContentBoard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-3">
            <SubSideMenu name = "Công việc của tôi"/>
            <SubSideMenu name = "Công việc tôi được giao"/>
          </div>
          <div className="col-lg-9  ">
              <ContentBoard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
