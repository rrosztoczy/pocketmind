import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions'

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
    return(
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
            {/* Add logo */}
              sign up now
            </Header>
            <Form size='large'>
                <Form.Input fluid name="first_name" placeholder='First name' onChange={(e) => this.handleFormChange(e)} />
                <Form.Input fluid name="last_name" placeholder='Last name' onChange={(e) => this.handleFormChange(e)} />
                <Form.Input fluid name="email" placeholder='email' onChange={(e) => this.handleFormChange(e)} />
                <Form.Input fluid name="password" icon='lock' iconPosition='left' placeholder='password' type='password' onChange={(e) => this.handleFormChange(e)} />

                <Button color='teal' fluid size='large' onClick={() => this.props.createUser({user: this.state})}>
                  sign up
                </Button>
            </Form>
            <Message>
              already have an account? <Button size='mini' onClick={() => this.props.handleLoginOrSignUpButtonClick()}>log in</Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//       user: state.user
//   };
// };

export default connect(null, actions)(Signup)