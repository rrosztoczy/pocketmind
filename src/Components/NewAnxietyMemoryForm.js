
import React from 'react'
import { Form } from 'semantic-ui-react'

  export default class NewAnxietyMemoryForm extends React.Component {

    state = {
        anxietyLevel: 5
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    render() {
      return (
        <Form onSubmit={(event) => this.props.submitAnxietyMemory(event, this.state)}>
            <Form.Input onChange={this.handleChange} fluid label='Anxiety Level' placeholder='Anxiety Level' name="anxietyLevel" value={this.state.anxietyLevel ? this.state.anxietyLevel : ""} />
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}