
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
            <Form.TextArea onChange={this.handleChange} fluid label='Automatic Thought' placeholder='What are your incessant thoughts?' name="automaticThought" value={this.state.automaticThought ? this.state.automaticThought : ""} />
            <Form.Input onChange={this.handleChange} fluid label='Bias or Issue' placeholder='Ex. overgeneralization, disqualifying the positive...' name="thoughtObject" value={this.state.thoughtObject ? this.state.thoughtObject : ""} />
            <Form.TextArea onChange={this.handleChange} label='Rational Response' placeholder='How would you respond to these thoughts?' name="rationalResponse" value={this.state.rationalResponse ? this.state.rationalResponse : ""} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}

export default connect(null, actions)(NewJournalForm)