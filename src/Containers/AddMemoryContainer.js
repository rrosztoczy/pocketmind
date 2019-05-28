import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ActivityOptionsSegment from '../Components/ActivityOptionsSegment'
import EmotionDefault from '../Components/EmotionDefault'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryFormContainer from '../Containers/NewThoughtMemoryFormContainer'
import NewJournalForm from '../Components/NewJournalForm'
import NewIdeaForm from '../Components/NewIdeaForm'
import NewGratitudeForm from '../Components/NewGratitudeForm'
import NewBalanceForm from '../Components/NewBalanceForm'
import NewActivityForm from '../Components/NewActivityForm'
import ThoughtDefault from '../Components/ThoughtDefault'
import ThoughtOptions from '../Components/ThoughtOptions'
import ActivityDefault from '../Components/ActivityDefault'
import ActivityOptions from '../Components/ActivityOptions'
import * as actions from '../actions'

class AddMemoryContainer extends React.Component {

  componentDidMount() {
    this.props.getAllUserMemories();
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

render() {
    return (
  <Grid style={{height: '100vh'}} centered>
    <Grid.Row centered columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  {!this.props.emotionOptions ? <EmotionDefault/> : <NewEmotionMemoryForm/> }
  {!this.props.thoughtOptions ? <ThoughtDefault/> : <ThoughtOptions /> }
  {/* New thought form is container for other forms */}
  {!this.props.journal ? null : 
    <Grid.Row columns={1}>
      <Grid.Column centered>
       <NewJournalForm/> 
       </Grid.Column>
  </Grid.Row>}
  {!this.props.idea ? null : 
    <Grid.Row columns={1}>
      <Grid.Column>
       <NewIdeaForm/> 
       </Grid.Column>
  </Grid.Row>}
  {!this.props.gratitude ? null : 
    <Grid.Row columns={1}>
      <Grid.Column>
       <NewGratitudeForm/> 
       </Grid.Column>
  </Grid.Row>}
  {!this.props.balance ? null : 
    <Grid.Row columns={1}>
      <Grid.Column>
       <NewBalanceForm/> 
       </Grid.Column>
  </Grid.Row>}
  {/* {!this.props.activityOptions ? <ActivityDefault/> : <ActivityOptions /> }
  {!this.props.NewActivityMemoryFormContainer ? null : <NewActivityMemoryFormContainer/> } */}
  {!this.props.activityOptions ? <ActivityDefault/> : <ActivityOptions /> }
  {this.props.activityFormSelection != null ? 
  <Grid.Row columns={1}>
      <Grid.Column>
       <NewActivityForm/> 
       </Grid.Column>
  </Grid.Row> : null}


  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>


    <Grid.Row centered>
       <Button animated color='orange' basic circular size='huge' onClick={(event) => this.createMemory(event, {memory: this.props.memory})} >
          <Button.Content visible><h1>LOG MEMORY</h1></Button.Content>
          <Button.Content hidden><Icon name='arrow right' /></Button.Content>
        </Button>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>

  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  </Grid>
  )
  }




//   Remove to activity memories ocm

handleSubmitActivity = (event) => {
    this.props.addActivityMemory(this.state)
    this.props.toggleForm({target: {value: 'activity'}})
}


createMemory(event, memory) {
    event.persist()
    this.props.createMemory(memory)
    this.props.toggleForm(event)
}


}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        memory: state.memory,
        thoughtOptions: state.thoughtOptions,
        emotionOptions: state.emotionOptions,
        activityOptions: state.activityOptions,
        activityFormSelection: state.activityFormSelection,
        emotions: state.emotions,
        emotion: state.emotion,
        thought: state.thought,
        stress: state.stress,
        anxiety:state.anxiety,
        journal: state.journal,
        idea: state.idea,
        gratitude: state.gratitude,
        balance: state.balance,
        logged_in: state.logged_in
    };
};

export default connect(mapStateToProps, actions)(AddMemoryContainer)