
import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FeelingOptionsSegment from './FeelingOptionsSegment'
import EmotionSelector from './EmotionSelector'
import * as actions from '../actions'

class NewEmotionMemoryForm extends React.Component {

    state = {
        emotionId: "",
        intensity: 5,
        pleasure: 5,
        stressLevel: 5,
        anxietyLevel: 5
    }

    handleChange = (event) => { 
        this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state, "event value", event.target))
    }
    
    handleSelect = (event) => {
        event.persist();
        this.setState({emotionId: this.props.emotions.find(emotion => emotion.emotion === event.target.innerText).id}, () => console.log('event', event.target))
    }

  handleSubmitEmotion = (event) => {
    this.props.addEmotionMemory(this.state)
    this.props.toggleForm({target: {value: 'emotionOptions'}})
}

handleCancelEmotion = (event) => {
    this.props.toggleForm({target: {value: 'emotionOptions'}})
}


    render() {
        return (
<>
  <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
        <Grid.Column width={2}>
        <Header>Emotion</Header>
        <Button circular color='pink' size='massive' basic icon="heart outline"/>
        <EmotionSelector onChange={this.handleSelect} emotions={this.props.emotions} fluid label='Emotion' placeholder='Emotion' name="emotionId" value={this.state.emotionId ? this.state.emotionId : ""} />
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Mood</Header>
        <Button circular color='blue' size='massive' basic icon="adjust"/>
        <Input focus placeholder='1-10...' style={{width: '100%'}}  style={{width: '100%'}} onChange={this.handleChange} name="pleasure" value={this.state.pleasure ? this.state.pleasure : ""} />
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Energy</Header>
        <Button circular color='yellow' size='massive' basic icon="lightning"/>
        <Input focus placeholder='1-10...' style={{width: '100%'}} onChange={this.handleChange} name="intensity" value={this.state.intensity ? this.state.intensity : ""} />
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Stress</Header>
        <Button circular color='violet' size='massive' basic icon="heartbeat"/>
        <Input focus placeholder='1-10...' style={{width: '100%'}}  style={{width: '100%'}} onChange={this.handleChange} name="stressLevel" value={this.state.stressLevel ? this.state.stressLevel : ""}/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Header>Anxiety</Header>
        <Button circular color='violet' size='massive' basic icon="cloud"/>
        <Input focus placeholder='1-10...' style={{width: '100%'}}  style={{width: '100%'}} onChange={this.handleChange} name="anxietyLevel" value={this.state.anxietyLevel ? this.state.anxietyLevel : ""}/>
        </Grid.Column>
        <Grid.Column width={3}>
      </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
        <Button circular color='orange' size='massive' basic onClick={this.handleSubmitEmotion} >Submit</Button>
        <Button circular color='red' size='massive' basic onClick={this.handleCancelEmotion} >Cancel</Button>
        </Grid.Row>
      </>
)
}
}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        memory: state.memory,
        emotionOptions: state.emotionOptions,
        emotions: state.emotions,
        emotion: state.emotion,
        logged_in: state.logged_in
    };
};



export default connect(mapStateToProps, actions)(NewEmotionMemoryForm)