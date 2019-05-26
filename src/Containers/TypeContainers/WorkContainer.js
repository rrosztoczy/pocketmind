import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'

class WorkContainer extends React.Component {


    componentDidMount() {
      this.props.getAllUserMemories()
    }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderActivityMemoryHeaders() {
        return (<Grid.Row columns={4}>
            <Grid.Column>
            <p>Go to Memory</p>
            </Grid.Column>
            <Grid.Column>
            <p>Time</p>
            </Grid.Column>
            <Grid.Column>
            <p>Activity Topic</p>
            </Grid.Column>
            <Grid.Column>
            <p>Activity Content</p>
            </Grid.Column>
          </Grid.Row>)
    }

    renderActivityMemories() {
      const userThoughtMemories = []
      this.props.memories.forEach(memory => memory.thoughtMemories.forEach(thoughtMemory => userThoughtMemories.push(thoughtMemory)))
        const sortedThoughtMemories = [...userThoughtMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedThoughtMemories.map(thoughtMemory => {
            return (<Grid.Row columns={4} key={thoughtMemory.id} >
              <Grid.Column>
              <p>{thoughtMemory.memoryId}</p>
              </Grid.Column>
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


state = {
    editedThoughtMemories: {}
}

handleMultiEditChange = (event, thoughtMemoryId) => {
    event.persist()
    console.log('hanlding change!')
    this.state.editedThoughtMemories[thoughtMemoryId] ? this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...prevState.editedThoughtMemories[thoughtMemoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second thought memories!', this.state)) : this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...this.props.thoughtMemories.find(thoughtMemory => thoughtMemory.id === thoughtMemoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
}

    renderEditForms() {
      const userThoughtMemories = []
      this.props.memories.forEach(memory => memory.thoughtMemories.forEach(thoughtMemory => userThoughtMemories.push(thoughtMemory)))
        const sortedThoughtMemories = [...userThoughtMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedThoughtMemories.map(thoughtMemory => {
            return (<Grid.Row key={thoughtMemory.id} columns={4}>
              <Grid.Column>
              <p>{thoughtMemory.memoryId}</p>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].createdAt ? this.state.editedThoughtMemories[thoughtMemory.id].createdAt : thoughtMemory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              {/* Edit emotions and thoughts in their own sections */}
              <Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].topic ? this.state.editedThoughtMemories[thoughtMemory.id].topic : thoughtMemory.topic}  name='topic' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].thoughtContent ? this.state.editedThoughtMemories[thoughtMemory.id].thoughtContent : thoughtMemory.thoughtContent}  name='thoughtContent' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
            </Grid.Row>)
        })

    }

    destroyThoughtMemory(thoughtMemoryId) {
      this.props.destroyThoughtMemory(thoughtMemoryId)
      this.props.getAllUserMemories()
    } 


    renderEditButton() {
        return <Button color='teal' fluid size='large' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.onEditButtonClick(event)}>
        EDIT THOUGHT MEMORY DATA
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
      <Header as='h1' color='blue' textAlign='center'>
          YOU ARE IN YOUR THOUGHT MEMORIES
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
            {this.props.editThoughtMemories ? this.renderSubmitEditButton() : this.renderEditButton()}
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Gratitude Journal
            </Header>
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
            thoughtMemories: state.thoughtMemories,
            editThoughtMemories: state.editThoughtMemories
        };
    };
     

export default connect(mapStateToProps, actions)(WorkContainer);