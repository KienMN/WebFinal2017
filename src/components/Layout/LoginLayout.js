import React, { Component } from 'react';
import { LoginForm } from '../Form/LoginForm';

export class LoginLayout extends Component {
  render() {
    const loginStyles = {backgroundColor: 'white', 
                        borderRadius: 3, 
                        padding: 20
                        };
    return (
     
      <div style={loginStyles} className="container">
        <LoginForm />
        </div>
      
    );
  }
}
