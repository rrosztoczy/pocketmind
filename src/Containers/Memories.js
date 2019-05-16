import React from 'react'
import { connect } from 'react-redux';
import { Grid, Image, Button, Header } from 'semantic-ui-react'
// Remove into redux
import adapter from '../adapter.js'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const memoryAdapter = adapter(memoryEndpoint)

class Memories extends React.Component {
    state = {
        memories: [],
        new: false,
        emotion_selected: false,
        thought_selected: false,
        stress_selected: false,
        anxiety_selected: false
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

    renderNewEmotionMemoryForm() {
        return <NewEmotionMemoryForm handleSubmitNew={this.handleSubmitNew} />
    }

    // handleSubmitNew = (e, newTrumpet) => {
    //     e.preventDefault();
    //     const userTrumpet = {...newTrumpet, user_id: parseInt(localStorage.getItem("user_id"))};
    //     (async () => {
    //     const newTrumpet = await this.props.trumpetAdapter.create(userTrumpet)
    //     const trumpets = await this.props.getTrumpets()
    //     this.setState(prevState => ({new: !prevState.new}))
    // })();
    // };




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
            <div>{this.state.emotion_selected ? this.renderNewEmotionMemoryForm() : null}</div>
            <div>{this.state.thought_selected ? this.renderNewThoughtMemoryForm() : null}</div>
            <div>{this.state.stress_selected ? this.renderNewStressMemoryForm() : null}</div>
            <div>{this.state.anxiety_selected ? this.renderNewAnxietyMemoryForm() : null}</div>
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