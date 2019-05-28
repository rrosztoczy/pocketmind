import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ActivityOptionsSegment from '../Components/ActivityOptionsSegment'
import ThoughtOptionsSegment from '../Components/ThoughtOptionsSegment'
import FeelingOptionsSegment from '../Components/FeelingOptionsSegment'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryFormContainer from '../Containers/NewThoughtMemoryFormContainer'
import NewJournalForm from '../Components/NewJournalForm'
import NewIdeaForm from '../Components/NewIdeaForm'
import NewGratitudeForm from '../Components/NewGratitudeForm'
import NewBalanceForm from '../Components/NewBalanceForm'
import NewActivityForm from '../Components/NewActivityForm'
import ThoughtOptionSort from '../Components/ThoughtOptionSort'
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
    return (<Grid style={{height: '100vh'}}>
    <Grid.Row centered></Grid.Row>
    <Grid.Row centered>{!this.props.emotionOptions ? <FeelingOptionsSegment/> : <NewEmotionMemoryForm/> }</Grid.Row>
    {!this.props.thoughtOptions ? <Grid.Row centered><ThoughtOptionsSegment/></Grid.Row> : <ThoughtOptionSort/>}
    {!this.props.thoughtOptions ? null : <Grid.Row centered>{this.renderThoughtForm()}</Grid.Row>}
    {!this.props.activityOptions ? <Grid.Row centered><ActivityOptionsSegment/></Grid.Row> : <ActivityOptionSort/> }
    {!this.props.activityOptions ? null : <Grid.Row centered><NewActivityForm/></Grid.Row> }
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