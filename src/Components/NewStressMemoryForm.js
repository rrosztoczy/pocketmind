
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'

class NewStressMemoryForm extends React.Component {

    state = {
        stressLevel: 5
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addStressMemory(this.state)
    }

    render() {
      return (
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Stress Level' placeholder='Stress Level' name="stressLevel" value={this.state.stressLevel ? this.state.stressLevel : ""} />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      )
    }
}

const mapDispatchToProps = dispatch => {
    console.log('about to send finction')
    return {
        addStressMemory: newStressMemory => dispatch({type: 'ADD_STRESS_MEMORY', payload: newStressMemory })
    };
};


export default connect(null, mapDispatchToProps)(NewStressMemoryForm)