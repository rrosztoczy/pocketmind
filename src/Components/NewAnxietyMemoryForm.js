
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'

class NewAnxietyMemoryForm extends React.Component {

    state = {
        anxietyLevel: 5
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAnxietyMemory(this.state)
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

const mapDispatchToProps = dispatch => {
    console.log('about to send finction')
    return {
        addAnxietyMemory: newAnxietyMemory => dispatch({type: 'ADD_ANXIETY_MEMORY', payload: newAnxietyMemory })
    };
};


export default connect(null, mapDispatchToProps)(NewAnxietyMemoryForm)