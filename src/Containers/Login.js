
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Login extends React.Component {
    state =  { userId: "",
    username: "",
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
        <Header as='h2' color='yellow' textAlign='center'>
      {/* put logo here */}
          Access your mind
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid name="username" icon='user' iconPosition='left' placeholder='username' onChange={(e) => this.handleFormChange(e)} />
            <Form.Input fluid name="password" icon='lock' iconPosition='left' placeholder='password' type='password' onChange={(e) => this.handleFormChange(e)} />

            <Button color='blue' fluid size='large' onClick={(e) => this.props.handleLoginSubmit(e, this.state)}>
              Login
            </Button>
          </Segment>
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