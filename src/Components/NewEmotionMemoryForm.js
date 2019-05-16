
import React from 'react'
import { Form } from 'semantic-ui-react'

  export default class NewEmotionMemoryForm extends React.Component {

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
            <Form.Input onChange={this.handleChange} fluid label='Emotion' placeholder='Emotion' name="Emotion" value={this.state.emotion ? this.state.emotion : ""} />
            {/* Figure out selection value */}
            <Form.Input onChange={this.handleSelect} fluid label='Intensity' placeholder='Intensity' name="Intensity" value={this.state.intensity ? this.state.intensity : ""} />
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input onChange={this.handleChange} fluid label='Pleasure' placeholder='Pleasure' name="Pleasure" value={this.state.pleasure ? this.state.pleasure : ""} />
          </Form.Group>
          <Form.Button >Remember</Form.Button>
        </Form>
      )
    }
}