import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import WebNav from './Components/WebNav'
import AppNav from './Components/AppNav'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import Login from './Containers/Login'
import Signup from './Containers/Signup'
import Blog from './Containers/Blog'
import About from './Containers/About'
import Memories from './Containers/Memories'
import AccountSettings from './Containers/AccountSettings'
// import logo from './logo.svg';
import './App.css'


// Adapter pattern
import adapter from './adapter.js'
const userEndpoint = "http://localhost:3000/api/v1/users"
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const emotionMemoryEndpoint = "http://localhost:3000/api/v1/emotion_memories"
const thoughtMemoryEndpoint = "http://localhost:3000/api/v1/thought_memories"

const userAdapter = adapter(userEndpoint)
const memoryAdapter = adapter(memoryEndpoint)
const emotionAdapter = adapter(emotionMemoryEndpoint)
const thoughtAdapter = adapter(thoughtMemoryEndpoint)



export default class App extends Component {
  render() {

    return (
      <div className="App">
        {localStorage.user_id ? <AppNav handleLogout={this.handleLogout} /> : <WebNav/> }
        <Switch>
          <Route path='/login' render={(routeProps) => <Login {...routeProps} handleFormChange={this.handleFormChange} handleLoginSubmit={this.handleLoginSubmit} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick}/>}/>
          <Route path='/signup' render={(routeProps) => <Signup  {...routeProps} handleFormChange={this.handleFormChange} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick} createNewUser={this.createNewUser}/>}/>
          <Route path='/blog' render={(routeProps) => <Blog {...routeProps} />}/>
          <Route path='/about' render={(routeProps) => <About {...routeProps} />}/>
          <Route path='/home' render={(props) => <Home/>}/>
          <Route path='/memories' render={(props) => <Memories/>}/>        
          <Route path='/account-settings' render={() =>  <AccountSettings />}/>
          <Route path='/' render={(routeProps) => <LandingPage {...routeProps} />}/>
        </Switch>
      </div>
    )
  }
}
