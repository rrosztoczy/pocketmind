
import React from 'react'
import { Form } from 'semantic-ui-react'

  export default class NewThoughtMemoryForm extends React.Component {

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
        <Form.TextArea onChange={this.handleChange} label='Thought Content' placeholder='What are you thinking?' name="Thought Content" value={this.state.content} />
            <Form.Input onChange={this.handleChange} fluid label='Thought Reason' placeholder='I think so because...' name="Thought Reason" value={this.state.summary ? this.state.summary : ""} />
            <Form.Input onChange={this.handleSelect} fluid label='Thought Object' placeholder='[blank] makes me think that' name="Thought Object" value={this.state.trumpet_type ? this.state.trumpet_type : ""} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}