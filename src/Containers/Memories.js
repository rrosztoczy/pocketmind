import React from 'react'
import { connect } from 'react-redux';
import { Grid, Image, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'
import MemoriesByType from '../ChartComponents/MemoriesByType';

class Memories extends React.Component {

    submitMemory = (event) => {
        event.preventDefault()
        console.log("creating memory!", this.state)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // Only update if bricks change
    //     return nextProps.memories.length != this.props.memories.length;
    //   }

    // componentDidMount() {
    //     console.log("is jwt setn yet?", localStorage.getItem('jwt'))
    //     this.props.getAllUserMemories()
    // }


    onFormButtonClick = (event) => {
         // change to dispatch?
        event.persist()
        this.props.toggleForm(event)
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    destroyMemory(memoryId) {
        console.log("clicked!")
        this.props.destroyMemory(memoryId)
    }

    renderMemoryHeaders() {
        return (<Grid.Row columns={7}>
            <Grid.Column>
            <p>Time</p>
            </Grid.Column>
            <Grid.Column>
            <p>Emotions</p>
            </Grid.Column>
            <Grid.Column>
            <p>Stress Level</p>
            </Grid.Column>
            <Grid.Column>
            <p>Anxiety Level</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thoughts</p>
            </Grid.Column>
            <Grid.Column>
            <p>Activities</p>
            </Grid.Column>
            <Grid.Column>
            {this.props.edit ? this.renderSubmitEditButton() : this.renderEditButton()}
            </Grid.Column>
          </Grid.Row>)
    }

    renderMemories() {
        // memory id[for now] | time of memory | emotions | thoughts | stress level | anxiety level 
        const sortedMemories = [...this.props.memories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedMemories.map(memory => {
            return (<Grid.Row key={memory.id} columns={7}>
              <Grid.Column>
              <p>{memory.createdAt}</p>
              </Grid.Column>
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
              <p>{memory.id}</p>
              </Grid.Column>
            </Grid.Row>)
        })

    }

state = {
    editedMemories: {}
}

handleMultiEditChange = (event, memoryId) => {
    // TODO: How to think about form state vs. app state when whole app is a form
    // Current issue... when out of input into another it rerenders it as the old value
    event.persist()
    console.log('hanlding change!')
    // currently overwriting the full id dont want to waht to use the old one...
    // if there is an id hash, copy it and add the new key or update it
    // if no id hash, add it
    this.state.editedMemories[memoryId] ? this.setState((prevState) => ({editedMemories: {...prevState.editedMemories, [memoryId]: {...prevState.editedMemories[memoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second memories!', this.state)) : this.setState((prevState) => ({editedMemories: {...prevState.editedMemories, [memoryId]: {...this.props.memories.find(memory => memory.id === memoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
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
    {this.renderMemoryHeaders()}
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