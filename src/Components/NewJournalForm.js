
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewJournalForm extends React.Component {


    state = {
        thoughtType: "journal",
        thoughtContent: "",
        topic: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addThoughtMemory(this.state)
        this.props.toggleForm({target: {value: 'journal'}})
        this.props.toggleForm({target: {value: 'thoughtOptions'}})
    }

    handleCancel = (event) => {
      this.props.toggleForm({target: {value: 'journal'}})
      this.props.toggleForm({target: {value: 'thoughtOptions'}})
  }

    render() {
      return (
        <Form style={{width: '50%'}} onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Input onChange={this.handleChange} fluid label='Topic' placeholder='I think so because...' name="topic" value={this.state.topic ? this.state.topic : ""} />
            <Form.TextArea onChange={this.handleChange} label='Content' placeholder='What are you thinking?' name="thoughtContent" value={this.state.thoughtContent} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Group>
          <Form.Button color="teal" basic  size="medium">Submit</Form.Button>
          <Form.Button basic  size="medium" onClick={this.handleCancel} >Cancel</Form.Button>
          </Form.Group>
        </Form>
      )
    }
}

export default connect(null, actions)(NewJournalForm)