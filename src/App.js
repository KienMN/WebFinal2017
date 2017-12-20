import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import {TableLayout } from './components/Layout/TableLayout';
import {LoginLayout} from './components/Layout/LoginLayout';
import {CreateRequestLayout} from './components/Layout/CreateRequestLayout';
import {ContentLayout} from './components/Layout/ContenLayout';
import { ContentBoard } from './components/Board/ContentBoard';
import {UserProfile} from './components/examples/UserProfile';
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginLayout}/>
          <Route path="/user/:user_id/dashboard/create" component={CreateRequestLayout}/>
          <Route path="/user/:user_id/dashboard/requests/:request_id" component={ContentLayout}/>
          <Route path="/user/:user_id/dashboard" component={TableLayout}/>
          <Route path="/test" component={UserProfile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
