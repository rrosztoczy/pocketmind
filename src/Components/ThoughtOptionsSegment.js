import React from 'react'
import { Header, Segment, Reveal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const square = { width: 140, height: 140 }
const largeSquare = { width: 145, height: 145 }

class ThoughtOptionsSegment extends React.Component {

    onFormButtonClick = (event) => {
        event.persist()
        console.log(event.target, event.target.value)
        this.props.toggleForm(event)
       }

       queuedThoughtMemories = () => {
        return this.props.memory.thoughtMemoriesAttributes.length
       }
     

    render() {
    return(
    <Reveal animated='rotate'>
      <Reveal.Content visible>
        <Segment circular style={square}>
          <Header as='h2'>
            Think {this.queuedThoughtMemories() > 0 ? "(" + this.queuedThoughtMemories() + ")" : null}
            <Header.Subheader><Icon size="large" name="lightbulb"/></Header.Subheader>
          </Header>
        </Segment>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Segment circular style={largeSquare} inverted color='teal' tertiary>
      <p>What's on your mind?</p>
        <Button compact circular size="massive" inverted name='thoughtOptions' value='thoughtOptions' onClick={this.onFormButtonClick} icon></Button>
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
        thoughtOptions: state.thoughtOptions,
        emotion: state.emotion,
        thought: state.thought,
        stress: state.stress,
        anxiety:state.anxiety,
        logged_in: state.logged_in
    };
  };

export default connect(mapStateToProps, actions)(ThoughtOptionsSegment)