import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'

class ThoughtMemoryContainer extends React.Component {


    state = {
        editedThoughtMemories: {}
    }
    componentDidMount() {
      this.props.getAllUserMemories()
    }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderThoughtMemoryHeaders() {
        return (<Grid.Row columns={3}>
            <Grid.Column>
            <p>Go to Memory</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thought Topic</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thought Content</p>
            </Grid.Column>
          </Grid.Row>)
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

    // TODO: Set type of thought memory based on button pressed in the form generator

    renderThoughtMemories() {
        return this.filteredUserThoughtMemories().map(thoughtMemory => {
            return (<Grid.Row columns={3} key={thoughtMemory.id} >
              <Grid.Column>
              <p>{thoughtMemory.createdAt}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.topic}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.thoughtContent}</p>
              </Grid.Column>
            </Grid.Row>)
        })

    }

handleMultiEditChange = (event, thoughtMemoryId) => {
    event.persist()
    console.log('hanlding change!')
    this.state.editedThoughtMemories[thoughtMemoryId] ? this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...prevState.editedThoughtMemories[thoughtMemoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second thought memories!', this.state)) : this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...this.filteredUserThoughtMemories().find(thoughtMemory => thoughtMemory.id === thoughtMemoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
}

    renderEditForms() {
        return this.filteredUserThoughtMemories().map(thoughtMemory => {
            return (<Grid.Row key={thoughtMemory.id} columns={3}>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].createdAt ? this.state.editedThoughtMemories[thoughtMemory.id].createdAt : thoughtMemory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              {/* Edit emotions and thoughts in their own sections */}
              <Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].topic ? this.state.editedThoughtMemories[thoughtMemory.id].topic : thoughtMemory.topic}  name='topic' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].thoughtContent ? this.state.editedThoughtMemories[thoughtMemory.id].thoughtContent : thoughtMemory.thoughtContent}  name='thoughtContent' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
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
        return <Button color='teal' size='large' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.onEditButtonClick(event)}>
        Edit Thoughts
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
        return <Button color='teal' fluid size='large' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.handleSubmitEdit(event)}>
        SUBMIT EDITS
      </Button>
    }

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Journal
            </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
            {this.props.editThoughtMemories ? this.renderSubmitEditButton() : this.renderEditButton()}
      </Grid.Column>
    </Grid.Row>


    {this.renderThoughtMemoryHeaders()}
    {this.props.editThoughtMemories ? this.renderEditForms() : this.renderThoughtMemories()}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            thoughtSelection: state.thoughtSelection,
            editThoughtMemories: state.editThoughtMemories
        };
    };
     

export default connect(mapStateToProps, actions)(ThoughtMemoryContainer);