import React from 'react'
import { connect } from 'react-redux';
import { Grid, Image, Button, Header, Icon } from 'semantic-ui-react'
// Remove into redux
// import adapter from '../adapter.js'
import NewMemoryForm from '../Components/NewMemoryForm'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryForm from '../Components/NewThoughtMemoryForm'
import NewStressMemoryForm from '../Components/NewStressMemoryForm'
import NewAnxietyMemoryForm from '../Components/NewAnxietyMemoryForm'
import * as actions from '../actions'
// const memoryEndpoint = "http://localhost:3000/api/v1/memories"
// const memoryAdapter = adapter(memoryEndpoint)

class Memories extends React.Component {

    submitMemory = (event) => {
        event.preventDefault()
        console.log("creating memory!", this.state)
    }

    // getMemories = async () => {
    //      // TODO: change to dispatch after reviewing fetch

        // this.setState({memories: memoriesFromApi}, () => console.log("state:", this.state))
    // };

    componentDidMount() {
        this.props.getAllMemories()
    }

    onFormButtonClick = (event) => {
         // change to dispatch?
        event.persist()
        this.props.toggleForm(event)
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderNewMemoryForm() {
        return <NewMemoryForm submitMemory={this.submitMemory} onFormButtonClick ={this.onFormButtonClick} />
    }

    renderNewEmotionMemoryForm() {
        return <NewEmotionMemoryForm submitEmotionMemory={this.submitEmotionMemory} handleSubmitNew={this.handleSubmitNew} />
    }

    renderNewThoughtMemoryForm() {
        return <NewThoughtMemoryForm submitThoughtMemory={this.submitThoughtMemory} handleSubmitNew={this.handleSubmitNew} />
    }

    renderNewStressMemoryForm() {
        return <NewStressMemoryForm submitStressMemory={this.submitStressMemory} handleSubmitNew={this.handleSubmitNew} />
    }

    renderNewAnxietyMemoryForm() {
        return <NewAnxietyMemoryForm submitAnxietyMemory={this.submitAnxietyMemory} handleSubmitNew={this.handleSubmitNew} />
    }

    destroyMemory(memoryId) {
        console.log("clicked!")
        this.props.destroyMemory(memoryId)
    }

    renderMemoryHeaders() {
        return (<Grid.Row columns={7}>
            <Grid.Column>
            <p>Memory Id</p>
            </Grid.Column>
            <Grid.Column>
            <p>Time of Memory</p>
            </Grid.Column>
            <Grid.Column>
            <p>Emotions</p>
            </Grid.Column>
            <Grid.Column>
            <p>Thoughts</p>
            </Grid.Column>
            <Grid.Column>
            <p>Stress Level</p>
            </Grid.Column>
            <Grid.Column>
            <p>Anxiety Level</p>
            </Grid.Column>
              <Grid.Column>
              <p>Delete</p>
              </Grid.Column>
          </Grid.Row>)
    }

    renderMemories() {
        // memory id[for now] | time of memory | emotions | thoughts | stress level | anxiety level 
        return this.props.memories.map(memory => {
            return (<Grid.Row key={memory.id} columns={7}>
              <Grid.Column>
              <p>[this is memory]{memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.timeOfMemory}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map(emotionMemory => emotionMemory.emotion) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.thoughtMemories ? memory.thoughtMemories.map(thoughtMemory => thoughtMemory.thoughtContent) : "No thought memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.stressLevel}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.anxietyLevel}</p>
              </Grid.Column>
              <Grid.Column>
              <Button onClick={() => this.destroyMemory(memory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }

    renderEditForms() {
        // memory id[for now] | time of memory | emotions | thoughts | stress level | anxiety level 
        return this.props.memories.map(memory => {
            return (<Grid.Row key={memory.id} columns={7}>
              <Grid.Column>
              <p>Editing{memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.timeOfMemory}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.emotionMemories ? memory.emotionMemories.map(emotionMemory => emotionMemory.emotion) : "No emotion memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.thoughtMemories ? memory.thoughtMemories.map(thoughtMemory => thoughtMemory.thoughtContent) : "No thought memories"}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.stressLevel}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.anxietyLevel}</p>
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
            <Button color='teal' fluid size='large' value='edit' name='edit' onClick={event => this.onEditButtonClick(event)}>
              EDIT A NEW MEMORY
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
            memories: state.memories,
            new: state.new,
            emotion: state.emotion,
            thought: state.thought,
            stress: state.stress,
            anxiety: state.anxiety,
            logged_in: state.logged_in
        };
    };
     
    // const mapDispatchToProps = dispatch => {
    //     console.log('about to send function')
    //     return {
    //         // addMemory: () => dispatch({type: 'NEW_MEMORY', payload: {}}),
   
    //         // getAllMemories: (dispatch) => {  memoryAdapter.getAll(dispatch) }
    //     };
    // };

export default connect(mapStateToProps, actions)(Memories);