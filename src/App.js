import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import WebNav from './Components/WebNav'
import AppNav from './Components/AppNav'
import Login from './Containers/Login'
import Signup from './Containers/Signup'
import AccountSettings from './Containers/AccountSettings'
// import logo from './logo.svg';
import './App.css';


// Adapter pattern
import adapter from './Adapter.js';
const userEndpoint = "http://localhost:3000/api/v1/users"
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const emotionMemoryEndpoint = "http://localhost:3000/api/v1/emotion_memories"
const thoughtMemoryEndpoint = "http://localhost:3000/api/v1/thought_memories"

const userAdapter = adapter(userEndpoint)
const memoryAdapter = adapter(memoryEndpoint)
const emotionAdapter = adapter(emotionMemoryEndpoint)
const thoughtAdapter = adapter(thoughtMemoryEndpoint)



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Pocket Mind Bitches!
        </p>
      </header>
    </div>
  );
}

export default App;
