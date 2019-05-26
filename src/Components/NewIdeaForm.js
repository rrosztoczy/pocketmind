
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewJournalForm extends React.Component {


    state = {
        thoughtType: "idea",
        thoughtContent: "",
        topic: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addThoughtMemory(this.state)
        this.props.toggleForm({target: {value: 'idea'}})
        this.props.toggleForm({target: {value: 'thoughtOptions'}})
    }

    handleCancel = (event) => {
      this.props.toggleForm({target: {value: 'idea'}})
      this.props.toggleForm({target: {value: 'thoughtOptions'}})
  }

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Input onChange={this.handleChange} fluid label='Topic' placeholder='I think so because...' name="topic" value={this.state.topic ? this.state.topic : ""} />
            <Form.Input onChange={this.handleChange} fluid label='Idea' placeholder='[blank] makes me think that' name="thoughtContent" value={this.state.thoughtContent ? this.state.thoughtContent : ""} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Submit</Form.Button>
          <Form.Button onClick={this.handleCancel} >Cancel</Form.Button>
        </Form>
      )
    }
}

export default connect(null, actions)(NewJournalForm)