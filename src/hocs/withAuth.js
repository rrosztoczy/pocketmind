import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'
import { Loader } from 'semantic-ui-react'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      console.log('%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC', 'color: purple')
      if (localStorage.getItem('jwt') && !this.props.loggedIn) {
        console.log('cdm jwt and logged in')
        this.props.fetchCurrentUser()
      }
      // if i have a token but don't know who it belongs to, ask the server for that user's data
    }
    
    componentDidUpdate() {
      console.log('auth comp did update')
      this.props.getAllUserMemories();
      this.props.getAllEmotions()
    }

    render() {

      console.log('%c INSIDE RENDER FOR HOC', 'color: green')
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        console.log('render jwt and logged in')
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        return <Loader active inline="centered" />
      } else {
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn,
      authenticatingUser: state.authenticatingUser
    }
  }

  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default withAuth