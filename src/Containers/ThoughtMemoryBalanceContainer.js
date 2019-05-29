import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtMemoriesBalanceList from '../ListComponents/ThoughtMemoryBalanceList'
import ThoughtMemoriesBalanceHeader from '../HeaderComponents/ThoughtMemoriesBalanceHeader'
import * as actions from '../actions'

class ThoughtMemoryBalanceContainer extends React.Component {


    // componentDidMount() {
    //   this.props.getAllUserMemories()
    // }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderThoughtMemories() {
        return this.filteredUserThoughtMemories().map(thoughtMemory => {
            return <ThoughtMemoriesBalanceList key={"tm" + thoughtMemory.id} thoughtMemory={thoughtMemory}/>
        })

    }

    state = {
        editedThoughtMemories: {}
    }

handleMultiEditChange = (event, thoughtMemoryId) => {
    event.persist()
    console.log('hanlding change!')
    this.state.editedThoughtMemories[thoughtMemoryId] ? this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...prevState.editedThoughtMemories[thoughtMemoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second thought memories!', this.state)) : this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...this.filteredUserThoughtMemories().find(thoughtMemory => thoughtMemory.id === thoughtMemoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
}

filteredUserThoughtMemories() {
    let userThoughtMemories = []
    this.props.memories.forEach(memory => memory.thoughtMemories.forEach(thoughtMemory => userThoughtMemories.push(thoughtMemory)))
    let filteredUserThoughtMemories = userThoughtMemories.filter(thoughtMemory => thoughtMemory.thoughtType===this.props.thoughtSelection)
    console.log(filteredUserThoughtMemories)
    let sortedFilteredUserThoughtMemories = [...filteredUserThoughtMemories].sort(function(a,b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    });
    console.log("sorted", sortedFilteredUserThoughtMemories)
    return sortedFilteredUserThoughtMemories
}

    renderEditForms() {
        return this.filteredUserThoughtMemories().map(thoughtMemory => {
            return (<Grid.Row key={thoughtMemory.id} columns={4}>
              <Grid.Column width={2}>
              <Input focus value={this.props.editedThoughtMemories[thoughtMemory.id] && this.props.editedThoughtMemories[thoughtMemory.id].createdAt ? this.props.editedThoughtMemories[thoughtMemory.id].createdAt : thoughtMemory.createdAt} name='createdAt' onChange={event => this.props.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column width={5}>
              <Input focus value={this.props.editedThoughtMemories[thoughtMemory.id] && this.props.editedThoughtMemories[thoughtMemory.id].automaticThought ? this.props.editedThoughtMemories[thoughtMemory.id].automaticThought : thoughtMemory.automaticThought}  name='automaticThought' onChange={event => this.props.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column width={2}>
              <Input focus value={this.props.editedThoughtMemories[thoughtMemory.id] && this.props.editedThoughtMemories[thoughtMemory.id].cognitiveBias ? this.props.editedThoughtMemories[thoughtMemory.id].cognitiveBias : thoughtMemory.cognitiveBias}  name='cognitiveBias' onChange={event => this.props.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column width={5}>
              <Input focus value={this.props.editedThoughtMemories[thoughtMemory.id] && this.props.editedThoughtMemories[thoughtMemory.id].rationalThought ? this.props.editedThoughtMemories[thoughtMemory.id].rationalThought : thoughtMemory.rationalThought}  name='rationalThought' onChange={event => this.props.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column width={2}>
              <Button onClick={() => this.destroyThoughtMemory(thoughtMemory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }

    destroyThoughtMemory(thoughtMemoryId) {
      this.props.destroyThoughtMemory(thoughtMemoryId)
      this.props.getAllUserMemories()
    } 


    renderEditButton() {
        return <Button color='teal' size='small' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.onEditButtonClick(event)}>
        Edit
      </Button>
    }

    handleSubmitEdit = (event) => {
        // Need to go thorugh state and hit update_memory for each memory that was changed
        console.log("state", this.state)
        const editedThoughtMemoryArray = Object.keys(this.state.editedThoughtMemories)
        editedThoughtMemoryArray.forEach(editedThoughtMemoryId => this.props.updateThoughtMemory(editedThoughtMemoryId, this.state.editedThoughtMemories[editedThoughtMemoryId]))
        this.props.getAllUserMemories()
        this.onEditButtonClick(event)
    }

    renderSubmitEditButton() {
        return <Button color='teal' size='small' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.handleSubmitEdit(event)}>
        Submit
      </Button>
    }

    render() {
        return this.props.editThoughtMemories ? this.renderEditForms() : this.renderThoughtMemories()
    }
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            thoughtSelection: state.thoughtSelection,
            editThoughtMemories: state.editThoughtMemories
        };
    };
     

export default connect(mapStateToProps, actions)(ThoughtMemoryBalanceContainer);