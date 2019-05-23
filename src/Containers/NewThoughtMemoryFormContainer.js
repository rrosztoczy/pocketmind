
import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import NewJournalForm from '../Components/NewJournalForm'
import * as actions from '../actions'

class NewThoughtMemoryFormContainer extends React.Component {


    state = {
        thoughtContent: "",
        thoughtObject: "",
        reason: ""
}
    // TODO: Set state to have the data for a new thought memory

    handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addThoughtMemory(this.state)
        this.props.toggleForm({target: {value: 'thought'}})
    }

    render() {
      return (
          <div>
        {this.props.journal ? <NewJournalForm/> : null}
        {/* // {this.props.journal ? <NewJournalForm/> : null}
        // {this.props.journal ? <NewJournalForm/> : null}
        // {this.props.journal ? <NewJournalForm/> : null} */}
        </div>
      )
    }
}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        journal: state.journal,
        idea: state.idea,
        gratitude: state.gratitude,
        balance: state.balance
    };
  };

export default connect(mapStateToProps, actions)(NewThoughtMemoryFormContainer)