import React, { useState } from 'react';
import './Login.scss';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
    

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="Login">
      <form className="Glass-container" onSubmit={handleSubmit}>
        <h2 className="Header">Welcome!</h2>

          <div className="InputContainer">
            <Input type="text" className="Login-input" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
            <Input type="password" className="Login-input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="ButtonContainer">
            <Button type="submit" content="Login" />
          </div>
          </form>
      </div>
    )
  }
Login.propTypes = {
setToken: PropTypes.func.isRequired
}; 