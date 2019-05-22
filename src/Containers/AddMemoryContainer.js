import React from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryForm from '../Components/NewThoughtMemoryForm'
import NewStressMemoryForm from '../Components/NewStressMemoryForm'
import NewAnxietyMemoryForm from '../Components/NewAnxietyMemoryForm'
import * as actions from '../actions'

class AddMemoryContainer extends React.Component {

    submitMemory = (event) => {
        event.preventDefault()
        console.log("creating memory!", this.state)
    }

    onFormButtonClick = (event) => {
        // change to dispatch?
       event.persist()
       this.props.toggleForm(event)
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


    return (
  <Grid style={{height: '100vh'}}>
    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  
    <Grid.Row columns={4} >
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column width={3}>
      <Button color='teal' fluid size='small' value='emotion' name='emotion' circular onClick={event => this.onFormButtonClick(event)}>
             + <br/> Emotion
            </Button>
      </Grid.Column>
      <Grid.Column width={9}>
      <div>{this.props.emotion ? this.renderNewEmotionMemoryForm() : <Header>How are you feeling?</Header>}</div>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column width={3}>
      <Button color='teal' fluid size='small' value='thought' name='thought'  circular onClick={event => this.onFormButtonClick(event)}>
      + <br/> Thought
            </Button>
      </Grid.Column>
      <Grid.Column width={9}>
      <div>{this.props.thought ? this.renderNewThoughtMemoryForm() : <Header>What are you thinking?</Header>}</div>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column width={3}>
      {/* <Button color='teal' fluid size='small' circular onClick={event => this.onFormButtonClick(event)}>
      + <br/> Activity
            </Button> */}
      </Grid.Column>
      <Grid.Column width={9}>
      {/* <div>{this.props.stressandanxiety ? this.renderNewStressAndAnxietyMemoryForm() : <Header>Do you have any stress or anxiety?</Header>}</div> */}
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

    {/* <Grid.Row columns={5}>
      <Grid.Column width={6}>
      </Grid.Column>
      <Grid.Column width={1}>
      😰
      </Grid.Column>
      <Grid.Column width={2}>
      energy
      </Grid.Column>
      <Grid.Column width={1}>
      😨
      </Grid.Column>
      <Grid.Column width={6}>
      </Grid.Column>
    </Grid.Row> */}

   
    <Grid.Row columns={1}>
      <Grid.Column>
      {/* Have a button here for form rendering */}
      Do you feel any 
      </Grid.Column>
  </Grid.Row>
        

    <Grid.Row centered columns={4}>
    <Grid.Column width={6}>
      </Grid.Column>
      <Grid.Column textAlign='center' width={2}>
      <Button fluid color='teal' size='tiny' value='stress' name='stress'  circular onClick={event => this.onFormButtonClick(event)}>Stress</Button>
      <div>{this.props.stress ? this.renderNewStressMemoryForm() : '😰'}</div>
      </Grid.Column>
      {/* <Grid.Column textAlign='center' width={2}>
      or
      </Grid.Column> */}
      <Grid.Column textAlign='center' width={2}>
      <Button fluid color='teal' size='tiny' value='anxiety' name='anxiety'  circular onClick={event => this.onFormButtonClick(event)}>Anxiety</Button>
      <div>{this.props.anxiety ? this.renderNewAnxietyMemoryForm() : '🤢' }</div>
      </Grid.Column>
      <Grid.Column width={6}>
      </Grid.Column>
  </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' circular size='huge'>
              Send this memory to space!
            </Button>
      </Grid.Column>
    </Grid.Row>

  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  </Grid>
  )
  }
}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        memory: state.memory,
        emotion: state.emotion,
        thought: state.thought,
        stress: state.stress,
        anxiety:state.anxiety,
        logged_in: state.logged_in
    };
};

export default connect(mapStateToProps, actions)(AddMemoryContainer)