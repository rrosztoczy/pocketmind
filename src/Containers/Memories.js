import React from 'react'
import { connect } from 'react-redux';
import { Grid, Image, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'
import MemoriesByType from '../ChartComponents/MemoriesByType';
import MemoriesList from '../ListComponents/MemoryList'
import MemoriesHeader from '../HeaderComponents/MemoriesHeader'

class Memories extends React.Component {

    state = {
        editedMemories: {}
    }

    submitMemory = (event) => {
        event.preventDefault()
        console.log("creating memory!", this.state)
    }

    onFormButtonClick = (event) => {
         // change to dispatch?
        event.persist()
        this.props.toggleForm(event)
    }

    handleMultiEditChange = (event, memoryId) => {
        event.persist()
        console.log('hanlding change!')
        this.state.editedMemories[memoryId] ? this.setState((prevState) => ({editedMemories: {...prevState.editedMemories, [memoryId]: {...prevState.editedMemories[memoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second memories!', this.state)) : this.setState((prevState) => ({editedMemories: {...prevState.editedMemories, [memoryId]: {...this.props.memories.find(memory => memory.id === memoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    destroyMemory(memoryId) {
        console.log("clicked!")
        this.props.destroyMemory(memoryId)
    }

    renderMemories() {
        // memory id[for now] | time of memory | emotions | thoughts | stress level | anxiety level 
        const sortedMemories = [...this.props.memories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedMemories.map(memory => {
            return <MemoriesList memory={memory}/>
        })

    }

    renderEditForms() {
        // Need to toggle input jsx filled with value form state, fully controlled
        const sortedMemories = [...this.props.memories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedMemories.map(memory => {
            return (<Grid.Row key={memory.id} columns={7}>
              <Grid.Column>
              <Input focus value={this.state.editedMemories[memory.id] && this.state.editedMemories[memory.id].createdAt ? this.state.editedMemories[memory.id].createdAt : memory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, memory.id)}/>
              </Grid.Column>
              {/* Edit emotions and thoughts in their own sections */}
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.emotion}</p>) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.stressLevel}</p>) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.anxietyLevel}</p>) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.thoughtMemories ? memory.thoughtMemories.map((thoughtMemory, index) => <p>{index+1}. {thoughtMemory.thoughtContent}</p>) : "No thought memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.activityMemories ? memory.activityMemories.map((activityMemory, index) => <p>{index+1}. {activityMemory.activityName}</p>) : "No activity memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <Button onClick={() => this.destroyMemory(memory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }
    renderEditButton() {
        return <Button color='teal' size='large' value='edit' name='edit' onClick={event => this.onEditButtonClick(event)}>
        Edit
      </Button>
    }

    handleSubmitEdit = (event) => {
        // Need to go thorugh state and hit update_memory for each memory that was changed
        console.log("state", this.state)
        const editedMemoryArray = Object.keys(this.state.editedMemories)
        editedMemoryArray.forEach(editedMemoryId => this.props.updateMemory(editedMemoryId, this.state.editedMemories[editedMemoryId]))
        this.onEditButtonClick(event)
    }

    renderSubmitEditButton() {
        return (<Button color='teal' size='large' value='edit' name='edit' onClick={event => this.handleSubmitEdit(event)}>
        Submit
      </Button>)
    }

    render() {
        return (
  <Grid divided='vertically'>
    <Grid.Row centered>
      <MemoriesByType/>
      </Grid.Row>
      <MemoriesHeader edit={this.props.edit} renderEditButton={() => this.renderEditButton()} renderSubmitEditButton={() => this.renderSubmitEditButton()}/>
    {this.props.edit ? this.renderEditForms() : this.renderMemories()}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        console.log("new state", state)
        return {
            memories: state.memories,
            edit: state.edit,
            emotions: state.emotions,
            logged_in: state.logged_in
        };
    };
     
export default connect(mapStateToProps, actions)(Memories);