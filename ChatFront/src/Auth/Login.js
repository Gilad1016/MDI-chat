import React, { useState } from 'react';
import './Auth.scss';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import PropTypes from 'prop-types';

async function loginUser(credentials) {

  return await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    

  const handleSubmit = async e => {
    console.log({ email, password });
    e.preventDefault();
    const token = await loginUser({ email, password });
    setToken(token);
  }//className="Login-input"

  return (
    <div className="Login">
      <form className="Glass-container" onSubmit={handleSubmit}>
        <h2 className="Header">Welcome!</h2>

          <div className="InputContainer">
            <Input type="text"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="ButtonContainer">
            <Button type="submit" content="LOGIN" />
          </div>
          </form>
      </div>
    )
  }

Login.propTypes = {
setToken: PropTypes.func.isRequired
}; 