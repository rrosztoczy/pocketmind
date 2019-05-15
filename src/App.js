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



export default class App extends Component {
  render() {

    return (
      <div className="App">
        {localStorage.user_id ? <header><Nav handleLogout={this.handleLogout} /></header> : null }
        <Switch>
          <Route path='/login' render={(routeProps) => <Login {...routeProps} handleFormChange={this.handleFormChange} handleLoginSubmit={this.handleLoginSubmit} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick}/>}/>
          <Route path='/signup' render={(routeProps) => <SignUp  {...routeProps} handleFormChange={this.handleFormChange} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick} createNewUser={this.createNewUser}/>}/>
          <Route path='/my-trumpets' render={(props) => <MyTrumpets {...props} getTrumpets={this.getTrumpets} myTrumpets={this.getUserTrumpets()} myReactedTrumpets={this.getUsersReactedTrumpets()} trumpetAdapter={trumpetAdapter} trumpetEndpoint={trumpetEndpoint} user_id={this.state.user_id} onReactionClick={this.onReactionClick}/>}/>
          <Route path='/community-trumpets' render={(props) => <CommunityTrumpets {...props} trumpets={this.state.trumpets} onReactionClick={this.onReactionClick}/>}/>        
          <Route path='/account-settings' render={() =>  <AccountSettings />}/>
          <Route path='/' render={(routeProps) => <Login {...routeProps} handleFormChange={this.handleFormChange} handleLoginSubmit={this.handleLoginSubmit} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick}/>}/>
        </Switch>
      </div>
    )
  }
}
