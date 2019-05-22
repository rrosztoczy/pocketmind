
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class Login extends React.Component {
    state =  {
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  }

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = (e) => { //semantic forms preventDefault for you
    // e.preventDefault()
    this.props.loginUser(this.state.email, this.state.password) //comes from mapDispatchToProps
    this.setState({ email: '', password: '' }) //reset form to initial state
  }


  render() {
    console.log("about to redirect from login!")
  return this.props.loggedIn ? (
    <Redirect to="/profile"/>
  ) : (<div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    {/* <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
    </style> */}

    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Image src={require('../pmlogo.jpeg')} size="small" verticalAlign='middle'/>
      <Header as='h1' color='blue' textAlign='center'>
          pocket mind
        </Header>
        <Header as='h3' color='blue' textAlign='center'>
          keep your head in the cloud
        </Header>
        <Form size='large'>
          {/* <Segment stacked> */}
            <Form.Input fluid name="email" placeholder='email' onChange={(e) => this.handleFormChange(e)} />
            <Form.Input fluid name="password" placeholder='password' type='password' onChange={(e) => this.handleFormChange(e)} />

            <Button color='teal' fluid size='large' onClick={this.handleLoginSubmit}>
              Login
            </Button>
          {/* </Segment> */}
        </Form>
        <Message>
          New to us? <Button size='mini' onClick={() => this.props.handleLoginOrSignUpButtonClick()}>Sign up</Button>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
}
}

const mapStateToProps = state => {
  return {
      loggedIn: state.loggedIn,
      authenticatingUser: state.authenticatingUser,
      error: state.error,
      failedLogin: state.failedLogin
  };
};

export default withRouter(connect(mapStateToProps, { loginUser })(Login))