
import React from 'react'
import { Form } from 'semantic-ui-react'

  export default class NewStressMemoryForm extends React.Component {

    // console.log("object", trumpet)
    // console.log("content", trumpet.content)
    // Post Body
    //  {
    //     "summary": null,
    //     "trumpet_type": "Missing source",
    //     "content": "Liar, liar, pants on fire.",
    //     "user_id": {populate from current user state, hard code at first},
    //      "url": "http://cnn.com/politics",
    //      "root_url": "http://cnn.com"
    //     }
    // }
    state = {}

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    render() {
      return (
        <Form onSubmit={(event, newMemory) => this.props.handleSubmitNew(event, this.state)}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Stress Level' placeholder='Stress Level' name="Stress Level" value={this.state.summary ? this.state.summary : ""} />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}