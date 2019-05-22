import React from 'react'
import { Header, Segment, Reveal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const square = { width: 130, height: 130 }
const largeSquare = { width: 135, height: 135 }

class ThoughtOptionsSegment extends React.Component {

    onFormButtonClick = (event) => {
        event.persist()
        console.log(event.target, event.target.value)
        this.props.toggleForm(event)
       }
     

    render() {
    return(
    <Reveal animated='rotate left'>
      <Reveal.Content visible>
        <Segment circular style={square}>
          <Header as='h2'>
            Think
            <Header.Subheader><Icon name="lightbulb"/></Header.Subheader>
          </Header>
        </Segment>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Segment circular style={largeSquare} inverted color='teal' tertiary>
      <p>how do you feel?</p>
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