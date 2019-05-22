import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import WebNav from './Components/WebNav'
import AppNav from './Components/AppNav'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import Login from './Containers/Login'
import Signup from './Containers/Signup'
import Blog from './Containers/Future/Blog'
import About from './Containers/Future/About'
import Memories from './Containers/Memories'
import ThoughtMemories from './Containers/ThoughtMemories'
import EmotionMemories from './Containers/EmotionMemories'
import Tools from './Containers/Future/Tools'
import AccountSettings from './Containers/Future/AccountSettings'
// import logo from './logo.svg';
import './App.css'
import { connect } from 'react-redux';
import { logout } from './actions';
import withAuth from '../src/hocs/withAuth';



class App extends Component {

  state = {logged_in: false}

  // fake login for design
  // handleLoginSubmit = () => {
  //  this.setState({logged_in: true}, () => console.log('logged in!', this.state))
  // }

  // handleLogout = () => {
  //   this.setState({logged_in: false}, () => console.log('logged in!', this.state))
  //  }

  render() {

    return (
      <div className="App">
        {this.props.loggedIn ? <AppNav handleLogout={this.props.logout} /> : <WebNav/> }
        <Switch>
          <Route path='/login' render={(routeProps) => <Login {...routeProps} handleFormChange={this.handleFormChange} handleLoginSubmit={this.handleLoginSubmit} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick}/>}/>
          <Route path='/signup' render={(routeProps) => <Signup  {...routeProps} handleFormChange={this.handleFormChange} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick} createNewUser={this.createNewUser}/>}/>
          <Route path='/blog' render={(routeProps) => <Blog {...routeProps} />}/>
          <Route path='/about' render={(routeProps) => <About {...routeProps} />}/>
          <Route path='/home' render={(props) => <Home/>}/>
          <Route path='/profile' component={withAuth(Memories)}/>
          <Route path='/thoughtmemories' component={withAuth(ThoughtMemories)}/>   
          <Route path='/emotionmemories' component={withAuth(EmotionMemories)}/>      
          <Route path='/tools' render={(props) => <Tools/>}/>           
          <Route path='/account-settings' render={() =>  <AccountSettings />}/>
          <Route path='/' render={(routeProps) => <LandingPage {...routeProps} />}/>
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log("new state", state)
  return {
      loggedIn: state.loggedIn
  };
};


export default connect(mapStateToProps, { logout })(App)
