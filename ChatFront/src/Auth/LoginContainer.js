import React from 'react';
import './Login.scss';
import Input from '../components/Input.js';
import Button from '../components/Button.js';


export class LoginContainer extends React.Component {

  render() {

    return (
      <div className="Glass-container">
        <h2 className="Header">Welcome!</h2>
        <div className="InputContainer">
          <Input type="text" className="Login-input" placeholder="Username" />
          <Input type="password" className="Login-input" placeholder="Password" />
        </div>
        <div class="ButtonContainer">
          <Button content="Sign Up" />
        </div>
      </div>
    );
}
  
}