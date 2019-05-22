import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'

class ThoughtMemories extends React.Component {


    componentDidMount() {
      this.props.getAllUserMemories()
    }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderThoughtMemoryHeaders() {
        return (<Grid.Row columns={7}>
            <Grid.Column>
            <p>Go to Memory</p>
            </Grid.Column>
            <Grid.Column>
            <p>Time</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thought Type</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thought Content</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thought Object</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thought Reason</p>
            </Grid.Column>
            <Grid.Column>
            <p>Time Orientation</p>
            </Grid.Column>
          </Grid.Row>)
    }

    renderThoughtMemories() {
      const userThoughtMemories = []
      this.props.memories.forEach(memory => memory.thoughtMemories.forEach(thoughtMemory => userThoughtMemories.push(thoughtMemory)))
        const sortedThoughtMemories = [...userThoughtMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedThoughtMemories.map(thoughtMemory => {
            return (<Grid.Row key={thoughtMemory.id} columns={7}>
              <Grid.Column>
              <p>{thoughtMemory.memoryId}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.createdAt}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.thoughtContent}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.thoughtType}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.thoughtObject}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.reason}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{thoughtMemory.timeOrientation}</p>
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
        const sortedThoughtMemories = [...this.props.thoughtMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedThoughtMemories.map(thoughtMemory => {
            return (<Grid.Row key={thoughtMemory.id} columns={7}>
              <Grid.Column>
              <p>{thoughtMemory.memoryId}</p>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].createdAt ? this.state.editedThoughtMemories[thoughtMemory.id].createdAt : thoughtMemory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              {/* Edit emotions and thoughts in their own sections */}
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].thoughtContent ? this.state.editedThoughtMemories[thoughtMemory.id].thoughtContent : thoughtMemory.thoughtContent}  name='thought_content' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].thoughtObject ? this.state.editedThoughtMemories[thoughtMemory.id].thoughtObject : thoughtMemory.thoughtObject}  name='thought_object' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].reason ? this.state.editedThoughtMemories[thoughtMemory.id].reason : thoughtMemory.reason}  name='reason' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].thoughtType ? this.state.editedThoughtMemories[thoughtMemory.id].thoughtType : thoughtMemory.thoughtType}  name='thought_type' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedThoughtMemories[thoughtMemory.id] && this.state.editedThoughtMemories[thoughtMemory.id].timeOrientation ? this.state.editedThoughtMemories[thoughtMemory.id].timeOrientation : thoughtMemory.timeOrientation}  name='time_orientation' onChange={event => this.handleMultiEditChange(event, thoughtMemory.id)}/>
              <Button onClick={() => this.props.destroyThoughtMemory(thoughtMemory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

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
            <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              GO TO MEMORIES
            </Button>
            <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              GO TO EMOTIONS
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Thought Memories
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
     

export default connect(mapStateToProps, actions)(ThoughtMemories);