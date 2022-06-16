import React, { useState } from 'react';
import './App.scss';
import { Chat } from './Chat/Chat';
import Login from './Auth/Login';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <div className="wrapper">
      <Login setToken={setToken} /></div>
  }

  return <div className="wrapper">
  <Chat /></div>
}

export default App;
