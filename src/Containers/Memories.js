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
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const memoryAdapter = adapter(memoryEndpoint)

class Memories extends React.Component {

    submitMemory = (event) => {
        event.preventDefault()
        console.log("creating memory!", this.state)
    }

    getMemories = async () => {
         // TODO: change to dispatch after reviewing fetch
        const memoriesFromApi = await memoryAdapter.getAll()
        this.setState({memories: memoriesFromApi}, () => console.log("state:", this.state))
    };

    componentDidMount() {
        this.getMemories()
    }

    onClickNew = (event) => {
         // change to dispatch?
         event.persist()
        this.props.toggleForm(event)
    }

    handleSelectMemoryType = (event) => {
        // change to dispatch?
        event.persist()
        console.log("event value", event.target.value)
        this.props.toggleForm(event)
        console.log("state set")
    }

    renderNewMemoryForm() {
        return <NewMemoryForm submitMemory={this.submitMemory} handleSelectMemoryType={this.handleSelectMemoryType} />
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
      <Button color='teal' fluid size='large' value='new' onClick={event => this.onClickNew(event)}>
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

    <Grid.Row columns={1}>
      <Grid.Column>
      {/* Fetch memories, put them in a container in this bottom grid... */}
      {/* First thing is first - fetch them and put them in state here... then get into redux */}
{/* Memory list here */}
      </Grid.Column>
    </Grid.Row>
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
     
    const mapDispatchToProps = dispatch => {
        console.log('about to send function')
        return {
            // addMemory: () => dispatch({type: 'NEW_MEMORY', payload: {}}),
            toggleForm: (event) => { dispatch({type: 'TOGGLE_FORM', payload: event.target.value}) }
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(Memories);