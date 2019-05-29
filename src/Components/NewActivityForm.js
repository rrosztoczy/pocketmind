
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import * as actions from '../actions'

class NewActivityForm extends React.Component {


    state = {
        activityType: this.props.activitySelection,
        activityName: "",
        activityDescription: ""
}

static getDerivedStateFromProps(nextProps, prevState) {
  return {...prevState, activityType: nextProps.activitySelection}
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addActivityMemory(this.state)
        this.props.updateActivityFormSelection({target: {value: null}})
        this.props.toggleForm({target: {value: 'activityOptions'}})
    }

    handleCancel = (event) => {
      this.props.updateActivityFormSelection({target: {value: null}})
      this.props.toggleForm({target: {value: 'activityOptions'}})
  }

    render() {
      return (
        <Form style={{width: '50%'}} onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Input onChange={this.handleChange} fluid label='Name' placeholder='What have you been up to?' name="activityName" value={this.state.activityName ? this.state.activityName : ""} />
            <Form.TextArea onChange={this.handleChange} fluid label='Description' placeholder='Enter a description here' name="activityDescription" value={this.state.activityDescription} />
          {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
          <Form.Group>
          <Form.Button color="orange" basic size="medium">Submit</Form.Button>
          <Form.Button basic size="medium" onClick={this.handleCancel} >Cancel</Form.Button>
          </Form.Group>
        </Form>
      )
    }
}

const mapStateToProps = state => {
    console.log("new state form hehe", state)
    return {
        activitySelection: state.activitySelection
    };
  };

export default connect(mapStateToProps, actions)(NewActivityForm)