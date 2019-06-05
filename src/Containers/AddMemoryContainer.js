import React from 'react'
import { Grid, Button, Icon, Image } from 'semantic-ui-react'
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
import '../index.css';

class AddMemoryContainer extends React.Component {

  componentDidMount() {
    this.props.getAllUserMemories();
    this.props.getAllEmotions()
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
    return (<>
    <div class="skyfive"></div>
    <div class="cloudfour">
    <div class="cloud-left"></div>
    <div class="cloud-right"></div>
    <div class="cloud-bottom"></div>
    <div class="eye-left"><div class="pupil"></div></div>
    <div class="eye-right"><div class="pupil"></div></div>
    <div class="mouth"></div>
    </div>
    <div class="spacingtwo"></div>
    <Grid style={{height: '100vh'}}>
    {!this.props.emotionOptions ? <Grid.Row centered><FeelingOptionsSegment/></Grid.Row> : <NewEmotionMemoryForm/> }
    {!this.props.thoughtOptions ? <Grid.Row centered><ThoughtOptionsSegment/></Grid.Row> : <ThoughtOptionSort/>}
    {!this.props.thoughtOptions ? null : <Grid.Row centered>{this.renderThoughtForm()}</Grid.Row>}
    {!this.props.activityOptions ? <Grid.Row centered><ActivityOptionsSegment/></Grid.Row> : <ActivityOptionSort/> }
    {!this.props.activityOptions ? null : <Grid.Row centered><NewActivityForm/></Grid.Row> }
    <Grid.Row></Grid.Row>
    <Grid.Row centered>
       <div class="wrap">
         <img src="http://image.flaticon.com/icons/svg/3/3907.svg" id="arrow" class="animated bounce"/>
       </div>
    </Grid.Row>
    <Grid.Row centered>
    
       <Button animated color='blue' inverted basic circular size='massive' onClick={(event) => this.createMemory(event, {memory: this.props.memory})} onMouseDown={e => e.preventDefault()}>
          <Button.Content visible><Image src='Pocket-Gradient.png' size="tiny"/></Button.Content>
          <Button.Content hidden><Icon name='arrow right' /></Button.Content>
        </Button>
    </Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
    <Grid.Row></Grid.Row>
  </Grid>
  <div class="box">
      <div class="sun">
        <div class="face">
          <div class="pupil-left"></div>
          <div class="pupil-right"></div>
          <div class="smile"></div>
        </div>
        
        <div class="ray">
          <div class="beam r1"></div>
          <div class="beam r2"></div>
          <div class="beam r3"></div>
          <div class="beam r4"></div>
          <div class="beam r5"></div>
          <div class="beam r6"></div>
          <div class="beam r7"></div>
          <div class="beam r8"></div>
          <div class="beam r9"></div>
          <div class="beam r10"></div>
        </div>
      </div>
    </div>
    </>
  )
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