import React from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import NewEmotionMemoryForm from '../Components/NewEmotionMemoryForm'
import NewThoughtMemoryForm from '../Components/NewThoughtMemoryForm'
import NewStressMemoryForm from '../Components/NewStressMemoryForm'
import NewAnxietyMemoryForm from '../Components/NewAnxietyMemoryForm'
import FeelingOptionsSegment from '../Components/FeelingOptionsSegment'
import ThoughtOptionsSegment from '../Components/ThoughtOptionsSegment'
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
  
    <Grid.Row columns={4} >
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column textAlign='center' width={4}>
      <FeelingOptionsSegment/>
      {/* On hover of feel or think, animate out the cool placeholder in the middle, and extend the options for that thing */}
      {/* On click feel, have feel move to side, emotion button where feel is, other four replace the 8 grid */}
      {/* On button click, have the button gray out and a circle of options appear around it */}
      {/* <Button color='teal' fluid size='small' value='emotion' name='emotion' circular onClick={event => this.onFormButtonClick(event)}>
             + <br/> Emotion
            </Button> */}
      </Grid.Column>
      {/* <Button circular icon='settings' /> */}
      {/* render 8 width column or buttons 5 buttons */}
      <Grid.Column width={8}>
      <div>{this.props.emotion ? this.renderNewEmotionMemoryForm() : null} </div>
             {/* Emotion icons:
        feeling and intensity = heart | energy = lightning? | mood = adjust or sun | stress = heartbeat | anxiety = x */}
      {/* On rednering new emotion form, first render add new emotion data container that has the five circles */}
        {/* Have each circle potentially have reveal*/}
        {/* First... what are the circles? Some type of react component? */}

      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column width={4}>
      <ThoughtOptionsSegment/>
      {/* <Button color='teal' fluid size='small' value='thought' name='thought'  circular onClick={event => this.onFormButtonClick(event)}>
      + <br/> Thought
            </Button> */}
      </Grid.Column>
      <Grid.Column width={8}>
      <div>{this.props.thought ? this.renderNewThoughtMemoryForm() : <Header>Super cool animation or chart or sick thing here</Header>}</div>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column width={4}>
      {/* <ActivityOptionsSegment/> */}
      {/* <Button color='teal' fluid size='small' circular onClick={event => this.onFormButtonClick(event)}>
      + <br/> Activity
            </Button> */}
      </Grid.Column>
      <Grid.Column width={8}>
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

   

  {/* icons: sun (activity, weather or mood), book (journal), fork (nots ure but awesome), idea (lightbultb), dna, cloud upload, address book (social), 
  briefcase (work), coffee (break), bath (idk lol), different variations of commnet, mobile (soical media etc), headphones (entertainment), clock, hourglass, 
  adjust (mood), pencil alternate (thought), handshake, thumbs up, heartbeat, heart, medikit, beer, cloud, cog, circle, home, info circle, start, trophy, icycle, car or plane for travel, bed for relax  */}
        
 

             
        {/* Thought icons: record journal = book | question  = question circle?  | record idea = lightbulb | record quote = quote | Shielf for mental journal | alarm = worry */}

              {/* Activity icons: type = bicycle or football, beer or martini, bed,, work, travel, learn */}

        {/* Other things Iike: the rotate and movement reveals ... maybe use to reveal an input form for each icon circle*/}


    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='orange' basic tertiary circular size='huge'>
              <h1>LOG MEMORY</h1>
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