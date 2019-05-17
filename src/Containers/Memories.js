import React from 'react'
import { connect } from 'react-redux';
import { Grid, Image, Button, Header } from 'semantic-ui-react'
// Remove into redux
import adapter from '../adapter.js'
import NewMemoryForm from '../Components/NewMemoryForm'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryForm from '../Components/NewThoughtMemoryForm'
import NewStressMemoryForm from '../Components/NewStressMemoryForm'
import NewAnxietyMemoryForm from '../Components/NewAnxietyMemoryForm'
import * as actions from '../actions'
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const memoryAdapter = adapter(memoryEndpoint)

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

    renderMemories() {
        console.log("in DA FUNK")
        return this.props.memories.map(memory => {
            console.log("in DA FUNK")
            return (<Grid.Row columns={2}>
              <Grid.Column>
              <p>{memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{memory.stressLevel}</p>
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
      <Button color='teal' fluid size='large' value='new' onClick={event => this.onFormButtonClick(event)}>
              ADD A NEW MEMORY
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
    {this.renderMemories()}
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