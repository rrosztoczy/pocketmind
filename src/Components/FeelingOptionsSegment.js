import React from 'react'
import { Header, Segment, Reveal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const square = { width: 140, height: 140 }
const largeSquare = { width: 145, height: 145 }

class FeelingOptionsSegment extends React.Component {

  onFormButtonClick = (event) => {
   event.persist()
   console.log(event.target, event.target.value)
   this.props.toggleForm(event)
  }

  queuedEmotionMemories = () => {
   return this.props.memory.emotionMemoriesAttributes.length
  }

  render() {
    return (
    <Reveal animated='rotate left'>
      <Reveal.Content visible>
        <Segment textAlign='center' circular style={square}>
          <Header as='h2'>
            Feel {this.queuedEmotionMemories() > 0 ? "(" + this.queuedEmotionMemories() + ")" : null}
          </Header>
        </Segment>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Segment circular style={largeSquare} inverted color='purple' value='emotion' tertiary>
        <p>how do you feel?</p>
        <Button compact circular size="massive" inverted name='emotionOptions' value='emotionOptions' onClick={this.onFormButtonClick} icon></Button>
        </Segment>
      </Reveal.Content>
    </Reveal>
    )
    }
}

const mapStateToProps = state => {
  console.log("new state", state)
  return {
      memory: state.memory,
      emotions: state.emotions,
      emotionOptions: state.emotionOptions,
      emotion: state.emotion,
      mood: state.mood,
      energy: state.energy,
      stress: state.stress,
      anxiety:state.anxiety,
      thought: state.thought,
      logged_in: state.logged_in
  };
};
export default connect(mapStateToProps, actions)(FeelingOptionsSegment)