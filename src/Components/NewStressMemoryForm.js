
import React from 'react'
import { Form } from 'semantic-ui-react'

  export default class NewStressMemoryForm extends React.Component {

    state = {
        stressLevel: 5
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    render() {
      return (
        <Form onSubmit={(event) => this.props.submitStressMemory(event, this.state.stressLevel)}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Stress Level' placeholder='Stress Level' name="stressLevel" value={this.state.stressLevel ? this.state.stressLevel : ""} />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}