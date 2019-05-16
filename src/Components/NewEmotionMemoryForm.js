
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'

class NewEmotionMemoryForm extends React.Component {


    state = {
            emotion: "",
            intensity: 5,
            pleasure: 5 
    }
    // TODO: Set state to have the data for a new emotion memory

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({type: 'ADD_EMOTION_MEMORY', payload: this.state })
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Emotion' placeholder='Emotion' name="emotion" value={this.state.emotion ? this.state.emotion : ""} />
            {/* Figure out selection value */}
            <Form.Input onChange={this.handleChange} fluid label='Intensity' placeholder='Intensity' name="intensity" value={this.state.intensity ? this.state.intensity : ""} />
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input onChange={this.handleChange} fluid label='Pleasure' placeholder='Pleasure' name="pleasure" value={this.state.pleasure ? this.state.pleasure : ""} />
          </Form.Group>
          <Form.Button >Remember</Form.Button>
        </Form>
      )
    }
}

export default connect()(NewEmotionMemoryForm)