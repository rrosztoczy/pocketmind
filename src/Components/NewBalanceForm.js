
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewJournalForm extends React.Component {


    state = {
        thoughtType: 'balance',
        automaticThought: "",
        cognitiveBias: "",
        rationalThought: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addThoughtMemory(this.state)
        this.props.toggleForm({target: {value: 'balance'}})
        this.props.toggleForm({target: {value: 'thoughtOptions'}})
    }


    handleCancel = (event) => {
      this.props.toggleForm({target: {value: 'balance'}})
      this.props.toggleForm({target: {value: 'thoughtOptions'}})
  }

    render() {
      return (
        <Form style={{width: '50%'}} onSubmit={(event) => this.handleSubmit(event)}>
            <Form.TextArea onChange={this.handleChange} fluid label='Automatic Thought' placeholder='What are your incessant thoughts?' name="automaticThought" value={this.state.automaticThought ? this.state.automaticThought : ""} />
            <Form.Input onChange={this.handleChange} fluid label='Bias or Issue' placeholder='Ex. overgeneralization, disqualifying the positive...' name="cognitiveBias" value={this.state.cognitiveBias ? this.state.cognitiveBias : ""} />
            <Form.TextArea onChange={this.handleChange} label='Rational Response' placeholder='How would you respond to these thoughts?' name="rationalThought" value={this.state.rationalThought ? this.state.rationalThought : ""} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Group>
          <Form.Button color="teal" basic  size="medium" >Submit</Form.Button>
          <Form.Button basic  size="medium"  onClick={this.handleCancel} >Cancel</Form.Button>
          </Form.Group>
        </Form>
      )
    }
}

export default connect(null, actions)(NewJournalForm)