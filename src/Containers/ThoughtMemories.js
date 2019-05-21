import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'

class ThoughtMemories extends React.Component {


    componentDidMount() {
        this.props.getAllThoughts()
    }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    destroyThoughtMemory(thoughtMemoryId) {
        console.log("clicked!")
        this.props.destroyThoughtMemory(thoughtMemoryId)
    }

    renderThoughtHeaders() {
        return (<Grid.Row columns={4}>
            <Grid.Column>
            <p>Time</p>
            </Grid.Column>
            <Grid.Column>
            <p>Go to Memory</p>
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

    renderThoughts() {
        const sortedThoughtMemories = [...this.props.thoughtMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedThoughtMemories.map(memory => {
            return (<Grid.Row key={memory.id} columns={6}>
              <Grid.Column>
              <p>[this is memory]{memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.createdAt}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.emotion}</p>) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.thoughtMemories ? memory.thoughtMemories.map((thoughtMemory, index) => <p>{index+1}. {thoughtMemory.thoughtContent}</p>) : "No thought memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.stressLevel}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.anxietyLevel}</p>
              </Grid.Column>
            </Grid.Row>)
        })

    }



// TODO: Set state to have the data for a new emotion memory

// handleSubmitEdit = (event) => {
//     event.preventDefault()
//     this.props.dispatch({type: 'EDIT_MEMORY', payload: this.state })
// }

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
              <p>Editing{memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedMemories[memory.id] && this.state.editedMemories[memory.id].createdAt ? this.state.editedMemories[memory.id].createdAt : memory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, memory.id)}/>
              </Grid.Column>
              {/* Edit emotions and thoughts in their own sections */}
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.emotion}</p>) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.thoughtMemories ? memory.thoughtMemories.map((thoughtMemory, index) => <p>{index+1}. {thoughtMemory.thoughtContent}</p>) : "No thought memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedMemories[memory.id] && this.state.editedMemories[memory.id].stressLevel ? this.state.editedMemories[memory.id].stressLevel : memory.stressLevel}  name='stressLevel' onChange={event => this.handleMultiEditChange(event, memory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedMemories[memory.id] && this.state.editedMemories[memory.id].anxietyLevel ? this.state.editedMemories[memory.id].anxietyLevel : memory.anxietyLevel}  name='anxietyLevel' onChange={event => this.handleMultiEditChange(event, memory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Button onClick={() => this.destroyMemory(memory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }
//     <Grid.Row columns={1}>
//     <Grid.Column>
//     {/* Fetch memories, put them in a container in this bottom grid... */}
//     {/* First thing is first - fetch them and put them in state here... then get into redux */}
// {/* Memory list here */}
//     </Grid.Column>
//   </Grid.Row>


    renderEditButton() {
        return <Button color='teal' fluid size='large' value='edit' name='edit' onClick={event => this.onEditButtonClick(event)}>
        EDIT MEMORY DATA
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
        return <Button color='teal' fluid size='large' value='edit' name='edit' onClick={event => this.handleSubmitEdit(event)}>
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
          YOU ARE IN YOUR MEMORIES
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              ADD A NEW MEMORY
            </Button>
            {this.props.edit ? this.renderSubmitEditButton() : this.renderEditButton()}
            <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              GO TO EMOTIONS
            </Button>
            <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              GO TO THOUGHTS
            </Button>
            <div>{this.props.new ? this.renderNewMemoryForm() : null}</div>
            <div>{this.props.emotion ? this.renderNewEmotionMemoryForm() : null}</div>
            <div>{this.props.thought ? this.renderNewThoughtMemoryForm() : null}</div>
            <div>{this.props.stress ? this.renderNewStressMemoryForm() : null}</div>
            <div>{this.props.anxiety ? this.renderNewAnxietyMemoryForm() : null}</div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Memories
            </Header>
      </Grid.Column>
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
            thoughtMemories: state.thoughtMemories,
            editThoughts: state.editThoughts
        };
    };
     
    // const mapDispatchToProps = dispatch => {
    //     console.log('about to send function')
    //     return {
    //         // addMemory: () => dispatch({type: 'NEW_MEMORY', payload: {}}),
   
    //         // getAllMemories: (dispatch) => {  memoryAdapter.getAll(dispatch) }
    //     };
    // };

export default connect(mapStateToProps, actions)(ThoughtMemories);