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
    state = {
        memories: [],
        new: false,
        emotion: false,
        thought: false,
        stress: false,
        anxiety: false
    }

    getMemories = async () => {
        const memoriesFromApi = await memoryAdapter.getAll()
        this.setState({memories: memoriesFromApi}, () => console.log("state:", this.state))
    };

    componentDidMount() {
        this.getMemories()
    }

    onClickNew = () => {
        this.setState(prevState => ({new: !prevState.new}))
    }

    handleSelectMemoryType = (event) => {
        event.persist()
        console.log("event value", event.target.value)
        this.setState(prevState => ({[event.target.value]: !prevState[event.target.value]}))
        console.log("state set")
    }

    renderNewMemoryForm() {
        return <NewMemoryForm handleSelectMemoryType={this.handleSelectMemoryType} />
    }

    renderNewEmotionMemoryForm() {
        return <NewEmotionMemoryForm handleSubmitNew={this.handleSubmitNew} />
    }

    renderNewThoughtMemoryForm() {
        return <NewThoughtMemoryForm handleSubmitNew={this.handleSubmitNew} />
    }

    renderNewStressMemoryForm() {
        return <NewStressMemoryForm handleSubmitNew={this.handleSubmitNew} />
    }

    renderNewAnxietyMemoryForm() {
        return <NewAnxietyMemoryForm handleSubmitNew={this.handleSubmitNew} />
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
      <Button color='teal' fluid size='large' onClick={this.onClickNew}>
              ADD A NEW MEMORY
            </Button>
            <div>{this.state.new ? this.renderNewMemoryForm() : null}</div>
            <div>{this.state.emotion ? this.renderNewEmotionMemoryForm() : null}</div>
            <div>{this.state.thought ? this.renderNewThoughtMemoryForm() : null}</div>
            <div>{this.state.stress ? this.renderNewStressMemoryForm() : null}</div>
            <div>{this.state.anxiety ? this.renderNewAnxietyMemoryForm() : null}</div>
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
            logged_in: state.logged_in
        };
    };
     
    const mapDispatchToProps = dispatch => {
        console.log('about to send finction')
        return {
            addMemory: () => dispatch({type: 'NEW_MEMORY', payload: {} })
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(Memories);