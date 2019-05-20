
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewAnxietyMemoryForm extends React.Component {

    state = {
        anxietyLevel: 5
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAnxietyToMemory(this.state)
        this.props.toggleForm({target: {value: 'anxiety'}})
    }

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Input onChange={this.handleChange} fluid label='Anxiety Level' placeholder='Anxiety Level' name="anxietyLevel" value={this.state.anxietyLevel ? this.state.anxietyLevel : ""} />
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}



// Keep as mapDispatch to show both methods
export default connect(null, actions)(NewAnxietyMemoryForm)