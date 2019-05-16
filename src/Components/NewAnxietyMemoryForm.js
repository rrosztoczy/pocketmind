
import React from 'react'
import { Form } from 'semantic-ui-react'

  export default class NewAnxietyMemoryForm extends React.Component {

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
            <Form.Input onChange={this.handleChange} fluid label='Summary' placeholder='Summary' name="summary" value={this.state.summary ? this.state.summary : ""} />
            {/* Figure out selection value */}
            <Form.Input onChange={this.handleSelect} fluid label='Type' placeholder='Type' name="trumpet_type" value={this.state.trumpet_type ? this.state.trumpet_type : ""} />
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input onChange={this.handleChange} fluid label='Website URL' placeholder='Website URL' name="url" value={this.state.url ? this.state.url : ""} />
            <Form.Input onChange={this.handleChange} fluid label='Root Url' placeholder='Root Url' name="root_url" value={this.state.root_url ? this.state.root_url : ""} />
          </Form.Group>
          <Form.TextArea onChange={this.handleChange} label='Content' placeholder='Tell us more about you...' name="content" value={this.state.content} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Button >Create</Form.Button>
        </Form>
      )
    }
}