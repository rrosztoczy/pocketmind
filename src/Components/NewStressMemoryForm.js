
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewStressMemoryForm extends React.Component {

    state = {
        stressLevel: 5
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addStressToMemory(this.state)
        this.props.toggleForm({target: {value: 'stress'}})
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

// const mapDispatchToProps = dispatch => {
//     console.log('about to send finction')
//     return {
//         addStressMemory: newStressMemory => dispatch({type: 'ADD_STRESS_MEMORY', payload: newStressMemory })
//     };
// };
// Took out mapdispatch...addd dispatch in place of addStresetc to handlesubmit


export default connect(null, actions)(NewStressMemoryForm)