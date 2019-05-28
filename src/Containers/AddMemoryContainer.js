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
import ThoughtOptionSort from '../Components/ThoughtOptionSort'
import ActivityDefault from '../Components/ActivityDefault'
import ActivityOptionSort from '../Components/ActivityOptionSort'
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

   handleCancelThought = (event) => {
    this.props.toggleForm({target: {value: 'thoughtOptions'}})
}

handleSubmitActivity = (event) => {
  this.props.addActivityMemory(this.state)
  this.props.toggleForm({target: {value: 'activity'}})
}


createMemory(event, memory) {
event.persist()
this.props.createMemory(memory)
this.props.toggleForm(event)
}

renderThoughtForm() {
  switch (this.props.thoughtSelection) {
    case  'journal':
    return <NewJournalForm/> 
    case  'idea':
    return <NewIdeaForm/> 
    case  'gratitude':
    return <NewGratitudeForm/> 
    case  'balance':
    return <NewBalanceForm/> 
    default: 
    return <NewJournalForm/> 
  }
}

render() {
    return (<Grid style={{height: '100vh'}} centered>
    <Grid.Row></Grid.Row>
    {!this.props.emotionOptions ? <EmotionDefault/> : <NewEmotionMemoryForm/> }
    {!this.props.thoughtOptions ? <ThoughtDefault/> : <ThoughtOptionSort/>}
    {!this.props.thoughtOptions ? null : this.renderThoughtForm()}
    {!this.props.activityOptions ? <ActivityDefault/> : <ActivityOptionSort/> }
    {!this.props.activityOptions ? null : <NewActivityForm/> }
    <Grid.Row></Grid.Row>
    <Grid.Row centered>
       <Button animated color='orange' basic circular size='huge' onClick={(event) => this.createMemory(event, {memory: this.props.memory})} onMouseDown={e => e.preventDefault()}>
          <Button.Content visible><h1>REMEMBER</h1></Button.Content>
          <Button.Content hidden><Icon name='arrow right' /></Button.Content>
        </Button>
    </Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
  </Grid>)
}


}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        memory: state.memory,
        thoughtSelection: state.thoughtSelection,
        activitySelection: state.activitySelection,
        thoughtOptions: state.thoughtOptions,
        emotionOptions: state.emotionOptions,
        activityOptions: state.activityOptions,
        emotions: state.emotions,
        emotion: state.emotion,
        thought: state.thought,
        stress: state.stress,
        anxiety:state.anxiety,
        logged_in: state.logged_in
    };
};

export default connect(mapStateToProps, actions)(AddMemoryContainer)