import React from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryForm from '../Components/NewThoughtMemoryForm'
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

    // renderAdditionalMemoryDataForm() {
    //     // stress, anxiety, energy
    //     return <AdditionalMemoryDataMemoryForm submitMemory={this.submitMemory} handleSubmitNew={this.handleSubmitNew} />
    // }

render() {


    return (
  <Grid style={{height: '100vh'}}>
    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  
    <Grid.Row columns={4} >
      <Grid.Column width={2}>
      spacing column
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
      spacing column
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      spacing column
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
      spacing column
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      spacing column
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
      spacing column
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' circular size='large'>
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
        logged_in: state.logged_in
    };
};

export default connect(mapStateToProps, actions)(AddMemoryContainer)