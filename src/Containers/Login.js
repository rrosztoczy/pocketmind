
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import '../index.css';

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

  handleLoginSubmit = (e) => {
    this.props.loginUser(this.state.email, this.state.password) 
    this.setState({ email: '', password: '' })
  }


  render() {
    console.log("about to redirect from login!")
  return this.props.loggedIn ? (
    <Redirect to="/home"/>
  ) : (<div className='login-form'>
    <div class="sky"/>
  <div class="skytwo">
  <div class="cloudtwo" />
  </div>
  <div class="skyfour"/>
  <div class="spacing"/>
  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Row centered>
      <Image style={{width: '200px', height: '200px'}} src='Pocket-White.png'/>
      </Grid.Row>
      </Grid>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    {/* <Grid.Row>
    </Grid.Row> */}
      <Grid.Column style={{ maxWidth: 450 }}>
      {/* <Image src={require('../pmlogo.jpeg')} size="small" verticalAlign='middle'/> */}
      <Header as='h1' color='blue' textAlign='center'>
            POCKET MIND
        </Header>
        <Header as='h3' color='blue' secondary  textAlign='center'>
          keep your head in the cloud
        </Header>
        <Form size='large'>
          {/* <Segment stacked> */}
            <Form.Input fluid name="email" placeholder='email' onChange={(e) => this.handleFormChange(e)} />
            <Form.Input fluid name="password" placeholder='password' type='password' onChange={(e) => this.handleFormChange(e)} />

            <Button color='blue' circular basic fluid size='large' onClick={this.handleLoginSubmit}>
              Login
            </Button>
          {/* </Segment> */}
        </Form>
      </Grid.Column>

    </Grid>

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