import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Chat } from './Chat/Chat';
import { Login } from './Auth/LoginScreen';


function App() {
  var isLoggedIn = false;

  if (isLoggedIn) {
    return <Chat />
    }
    else {
      return <Login />
    }
};

export default App;
