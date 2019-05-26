
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewActivityForm extends React.Component {


    state = {
        activityType: "work",
        activityName: "",
        activityDescription: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addActivityMemory(this.state)
        this.props.toggleForm({target: {value: 'work'}})
        this.props.toggleForm({target: {value: 'activityOptions'}})
    }

    handleCancel = (event) => {
      this.props.toggleForm({target: {value: 'work'}})
      this.props.toggleForm({target: {value: 'activityOptions'}})
  }

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Input onChange={this.handleChange} fluid label='Name' placeholder='What have you been up to?' name="topic" value={this.state.activityName ? this.state.activityName : ""} />
            <Form.TextArea onChange={this.handleChange} label='Description' placeholder='Enter a description here' name="activityDescription" value={this.state.activityDescription} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Submit</Form.Button>
          <Form.Button onClick={this.handleCancel} >Cancel</Form.Button>
        </Form>
      )
    }
}

export default connect(null, actions)(NewActivityForm)