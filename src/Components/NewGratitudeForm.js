
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewJournalForm extends React.Component {


    state = {
        thoughtType: "gratitude",
        thoughtContent: "",
        topic: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addThoughtMemory(this.state)
        this.props.toggleForm({target: {value: 'gratitude'}})
    }

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Input onChange={this.handleChange} fluid label='I am grateful for...' placeholder='I am grateful for...' name="topic" value={this.state.topic ? this.state.topic : ""} />
            <Form.Input onChange={this.handleChange} fluid label='topic' placeholder='Because...' name="thoughtContent" value={this.state.thoughtContent ? this.state.thoughtContent : ""} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}

export default connect(null, actions)(NewJournalForm)