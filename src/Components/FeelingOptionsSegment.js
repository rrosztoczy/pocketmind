import React from 'react'
import { Header, Segment, Reveal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const square = { width: 130, height: 130 }
const largeSquare = { width: 135, height: 135 }

class FeelingOptionsSegment extends React.Component {

  onFormButtonClick = (event) => {
   event.persist()
   console.log(event.target, event.target.value)
   this.props.toggleForm(event)
  }

  render() {
    return (
    <Reveal animated='rotate left'>
      <Reveal.Content visible>
        <Segment textAlign='center' circular style={square}>
          <Header as='h2'>
            Feel
            <Header.Subheader><Icon size="large" name="heart"/></Header.Subheader>
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