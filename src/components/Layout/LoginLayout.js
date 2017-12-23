import React, { Component } from 'react';
import { LoginForm } from '../Form/LoginForm';

export class LoginLayout extends Component {
  render() {
    const loginStyles = {backgroundColor: 'white', 
                        borderRadius: 3, 
                        padding: 20
                        };
    return (
     
      <div style={loginStyles} id="login-container" className="container">
        <LoginForm />
        </div>
      
    );
  }
}
