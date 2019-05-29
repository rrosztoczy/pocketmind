import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router'
import * as actions from '../actions'
import '../index.css';

class Signup extends React.Component {

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


  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile"/>
    ) : ( <div className='login-form'>
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
        <div class="sky"/>
  <div class="skytwo">
  <div class="cloudtwo" />
  </div>
  <div class="skythree"/>
  <div class="spacing"/>
  <div class="spacing"/>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
            {/* Add logo */}
              Sign up now
            </Header>
            <Form size='large'>
                <Form.Input fluid name="first_name" placeholder='First name' onChange={(e) => this.handleFormChange(e)} />
                <Form.Input fluid name="last_name" placeholder='Last name' onChange={(e) => this.handleFormChange(e)} />
                <Form.Input fluid name="email" placeholder='Email' onChange={(e) => this.handleFormChange(e)} />
                <Form.Input fluid name="password" icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(e) => this.handleFormChange(e)} />

                <Button color='blue' basic circular fluid size='large' onClick={() => this.handleSignUp(this.state)}>
                  Sign up
                </Button>
            </Form>
          </Grid.Column>
        </Grid>
        <div className="bg">
  <div className="mountain">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-two">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
   <div className="mountain-three">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="cloudthree"></div>
</div>
      </div>
    )
  }

  handleSignUp = (userdata) => {
    this.props.createUser({user: userdata})
  }
}

const mapStateToProps = state => {
  return {
      loggedIn: state.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, actions)(Signup))