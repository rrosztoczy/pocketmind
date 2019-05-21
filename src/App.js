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
import ThoughtMemories from './Containers/ThoughtMemories'
import EmotionMemories from './Containers/EmotionMemories'
import LeftBrain from './Containers/LeftBrain'
import RightBrain from './Containers/RightBrain'
import Tools from './Containers/Tools'
import AccountSettings from './Containers/AccountSettings'
// import logo from './logo.svg';
import './App.css'



export default class App extends Component {

  state = {logged_in: false}

  // fake login for design
  handleLoginSubmit = () => {
   this.setState({logged_in: true}, () => console.log('logged in!', this.state))
  }

  handleLogout = () => {
    this.setState({logged_in: false}, () => console.log('logged in!', this.state))
   }

  render() {

    return (
      <div className="App">
        {this.state.logged_in ? <AppNav handleLogout={this.handleLogout} /> : <WebNav/> }
        <Switch>
          <Route path='/login' render={(routeProps) => <Login {...routeProps} handleFormChange={this.handleFormChange} handleLoginSubmit={this.handleLoginSubmit} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick}/>}/>
          <Route path='/signup' render={(routeProps) => <Signup  {...routeProps} handleFormChange={this.handleFormChange} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick} createNewUser={this.createNewUser}/>}/>
          <Route path='/blog' render={(routeProps) => <Blog {...routeProps} />}/>
          <Route path='/about' render={(routeProps) => <About {...routeProps} />}/>
          <Route path='/home' render={(props) => <Home/>}/>
          <Route path='/memories' render={(props) => <Memories/>}/>
          <Route path='/thoughtmemories' render={(props) => <ThoughtMemories/>}/>   
          <Route path='/emotionmemories' render={(props) => <EmotionMemories/>}/>   
          <Route path='/left-brain' render={(props) => <LeftBrain/>}/>      
          <Route path='/right-brain' render={(props) => <RightBrain/>}/>      
          <Route path='/tools' render={(props) => <Tools/>}/>           
          <Route path='/account-settings' render={() =>  <AccountSettings />}/>
          <Route path='/' render={(routeProps) => <LandingPage {...routeProps} />}/>
        </Switch>
      </div>
    )
  }
}
