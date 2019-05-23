import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryForm from '../Components/NewThoughtMemoryForm'
import NewStressMemoryForm from '../Components/NewStressMemoryForm'
import NewAnxietyMemoryForm from '../Components/NewAnxietyMemoryForm'
import ThoughtOptionsSegment from '../Components/ThoughtOptionsSegment'
import ActivityOptionsSegment from '../Components/ActivityOptionsSegment'
import EmotionDefault from '../Components/EmotionDefault'
import ThoughtDefault from '../Components/ThoughtDefault'
import EmotionSelector from '../Components/EmotionSelector'
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

//     <Grid.Row centered columns={4}>
//     <Grid.Column width={6}>
//       </Grid.Column>
//       <Grid.Column textAlign='center' width={2}>
//       <Button fluid color='teal' size='tiny' value='stress' name='stress'  circular onClick={event => this.onFormButtonClick(event)}>Stress</Button>
//       <div>{this.props.stress ? this.renderNewStressMemoryForm() : '😰'}</div>
//       </Grid.Column>
//       {/* <Grid.Column textAlign='center' width={2}>
//       or
//       </Grid.Column> */}
//       <Grid.Column textAlign='center' width={2}>
//       <Button fluid color='teal' size='tiny' value='anxiety' name='anxiety'  circular onClick={event => this.onFormButtonClick(event)}>Anxiety</Button>
//       <div>{this.props.anxiety ? this.renderNewAnxietyMemoryForm() : '🤢' }</div>
//       </Grid.Column>
//       <Grid.Column width={6}>
//       </Grid.Column>
//   </Grid.Row>


    return (
  <Grid style={{height: '100vh'}}>
    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>

  {!this.props.emotionOptions ?
    <EmotionDefault/> :

  }


      {!this.props.thoughtOptions ?
      <ThoughtDefault/> :
      <>
      <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
        <Grid.Column width={2}>
        <Header>Journal</Header>
        <Button circular color='brown' size='massive' basic icon="book"/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Idea</Header>
        <Button circular color='yellow' size='massive' basic icon="lightbulb outline"/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Gratitude</Header>
        <Button circular color='green' size='massive' basic icon="gem outline"/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Balance</Header>
        <Button circular color='blue' size='massive' basic icon="law"/>
        </Grid.Column>
      <Grid.Column width={4}>
      </Grid.Column>
    </Grid.Row>
    </>
}

    <Grid.Row columns={4}>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={3}>
      <ActivityOptionsSegment/>
      {/* icons: sun (activity, weather or mood), book (journal), fork (nots ure but awesome), idea (lightbultb), dna, cloud upload, address book (social), 
  briefcase (work), coffee (break), bath (idk lol), different variations of commnet, mobile (soical media etc), headphones (entertainment), clock, hourglass, 
  adjust (mood), pencil alternate (thought), handshake, thumbs up, heartbeat, heart, medikit, beer, cloud, cog, circle, home, info circle, start, trophy, icycle, car or plane for travel, bed for relax  */}
      </Grid.Column>
      {!this.props.activityOptions ?
      <Grid.Column width={8}>
        <Header>Show small activities chart here...</Header>
      </Grid.Column> :
      <>
        <Grid.Column width={2}>
        <Header>Work</Header>
        <Button circular color='teal' size='massive' basic icon="coffee"/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Physical</Header>
        <Button circular color='orange' size='massive' basic icon="heartbeat"/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Social</Header>
        <Button circular color='purple' size='massive' basic icon="users"/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Entertainment</Header>
        <Button circular color='yellow' size='massive' basic icon="bar"/>
        </Grid.Column>
      </>
      }
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column >
      </Grid.Column>
    </Grid.Row>

   




  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>


    <Grid.Row color='orange' columns={1}>
      <Grid.Column>
      <Button animated color='orange' inverted basic circular size='huge' onClick={(event) => this.createMemory(event, {memory: this.props.memory})} >
              <Button.Content visible><h1>LOG MEMORY</h1></Button.Content>
              <Button.Content hidden><Icon name='arrow right' /></Button.Content>
            </Button>
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
  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  </Grid>
  )
  }


// Remove to emotion memories component
  handleSubmitEmotion = (event) => {
    this.props.addEmotionMemory(this.state)
    this.props.toggleForm({target: {value: 'emotionOptions'}})
}


//   Remove to htought memories ocm

handleSubmitThought = (event) => {
    this.props.addThoughtMemory(this.state)
    this.props.toggleForm({target: {value: 'thought'}})
    this.props.incrementCounter({counter: 'queuedThoughtMemories'})
}

//   Remove to activity memories ocm

handleSubmitActivity = (event) => {
    this.props.addActivityMemory(this.state)
    this.props.toggleForm({target: {value: 'activity'}})
    this.props.incrementCounter({counter: 'queuedActivityMemories'})
}

handleChange = (event) => { 
    this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state, "event value", event.target))
}

handleSelect = (event) => {
    event.persist();
    this.setState({emotionId: this.props.emotions.find(emotion => emotion.emotion === event.target.innerText).id}, () => console.log('event', event.target))
}

createMemory(event, memory) {
    // transform arrays of has_many records to hashes for ruby
    // console.log("About to create memory!", memory)
    // const formattedMemory = this.formatNestedAttributes(memory)
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
        emotions: state.emotions,
        emotion: state.emotion,
        thought: state.thought,
        stress: state.stress,
        anxiety:state.anxiety,
        logged_in: state.logged_in
    };
};

export default connect(mapStateToProps, actions)(AddMemoryContainer)