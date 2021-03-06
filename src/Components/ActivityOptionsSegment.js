import React from 'react'
import { Header, Segment, Reveal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const square = { width: 140, height: 140 }
const largeSquare = { width: 145, height: 145 }

class ActivityOptionsSegment extends React.Component {

  onFormButtonClick = (event) => {
   event.persist()
   console.log(event.target, event.target.value)
   this.props.toggleForm(event)
  }

  queuedActivityMemories = () => {
    return this.props.memory.activityMemoriesAttributes.length
   }

  render() {
    return (
    <Reveal animated='rotate left'>
      <Reveal.Content visible>
        <Segment textAlign='center' circular style={square}>
          <Header as='h2'>
            Do  {this.queuedActivityMemories() > 0 ? "(" + this.queuedActivityMemories() + ")" : null}
          </Header>
        </Segment>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Segment circular style={largeSquare} inverted color='orange' value='activity' tertiary>
        <p>What are you up to?</p>
        <Button compact circular size="massive" inverted name='activityOptions' value='activityOptions' onClick={this.onFormButtonClick} icon></Button>
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
      activityOptions: state.activityOptions,
      emotion: state.emotion,
      mood: state.mood,
      energy: state.energy,
      stress: state.stress,
      anxiety:state.anxiety,
      thought: state.thought,
      logged_in: state.logged_in
  };
};
export default connect(mapStateToProps, actions)(ActivityOptionsSegment)