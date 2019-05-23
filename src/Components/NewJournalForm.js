
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewJournalForm extends React.Component {


    state = {
        thoughtContent: "",
        thoughtObject: "",
        reason: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addThoughtMemory(this.state)
        this.props.toggleForm({target: {value: 'thought'}})
    }

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
        <Form.TextArea onChange={this.handleChange} label='Thought Content' placeholder='What are you thinking?' name="thoughtContent" value={this.state.thoughtContent} />
            <Form.Input onChange={this.handleChange} fluid label='Thought Reason' placeholder='I think so because...' name="reason" value={this.state.reason ? this.state.reason : ""} />
            <Form.Input onChange={this.handleChange} fluid label='Thought Object' placeholder='[blank] makes me think that' name="thoughtObject" value={this.state.thoughtObject ? this.state.thoughtObject : ""} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}

export default connect(null, actions)(NewJournalForm)