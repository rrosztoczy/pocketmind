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
import ActivityMemories from './Containers/ActivityMemories'
import MemoryTimeline from './Containers/MemoryTimeline'
// import logo from './logo.svg';
import './App.css'
import { connect } from 'react-redux';
import { logout } from './actions';
import withAuth from '../src/hocs/withAuth';



class App extends Component {

  state = {logged_in: false}

  render() {

    return (
      <div className="App">
        {this.props.loggedIn ? <AppNav handleLogout={this.props.logout} /> : <WebNav/> }
        <Switch>
          <Route path='/login' render={(routeProps) => <Login {...routeProps} handleFormChange={this.handleFormChange} handleLoginSubmit={this.handleLoginSubmit} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick}/>}/>
          <Route path='/signup' render={(routeProps) => <Signup  {...routeProps} handleFormChange={this.handleFormChange} handleLoginOrSignUpButtonClick={this.handleLoginOrSignUpButtonClick} createNewUser={this.createNewUser}/>}/>
          <Route path='/blog' render={(routeProps) => <Blog {...routeProps} />}/>
          <Route path='/about' render={(routeProps) => <About {...routeProps} />}/>
          <Route path='/home' component={withAuth(Home)}/>
          <Route path='/memories' component={withAuth(Memories)}/>
          <Route path='/thoughts' component={withAuth(ThoughtMemories)}/>   
          <Route path='/emotions' component={withAuth(EmotionMemories)}/> 
          <Route path='/activities' component={withAuth(ActivityMemories)}/> 
          <Route path='/timeline' component={withAuth(MemoryTimeline)}/>         
          <Route path='/' render={(routeProps) => <LandingPage {...routeProps} />}/>
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
      loggedIn: state.loggedIn
  };
};


export default connect(mapStateToProps, { logout })(App)
