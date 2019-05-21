
import React from 'react'
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react'
import * as actions from '../actions'

class NewMemoryForm extends React.Component {

    // formatNestedAttributes(memory) {
    //     const jsonPostBody = {...memory}
    //     const jsonEmotionMemories = jsonPostBody.emotionMemories.forEach((emotionMemory, index) => {[index]: emotionMemory})
    //     const jsonThoughtMemories = jsonPostBody.thoughtMemories.forEach((thoughtMemory, index) => {[index]: thoughtMemory})
    //     {...jsonPostBody, emotionMemories: jsonEmotionMemories}
    //     {...jsonPostBody, thoughtMemories: jsonThoughtMemories}
    //     console.log("memory", memory)
    //     console.log("formatted memory", jsonPostBody)
    // }

    createMemory(event, memory) {
        // transform arrays of has_many records to hashes for ruby
        // console.log("About to create memory!", memory)
        // const formattedMemory = this.formatNestedAttributes(memory)
        event.persist()
        this.props.createMemory(memory)
        this.props.toggleForm(event)
    }

    render() {
      return (
        <Card centered>
        <Card.Content>
          <Card.Header>Create a Memory</Card.Header>
          <Card.Meta>
            What do you want to remember?
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='teal' onClick={event => this.props.onFormButtonClick(event)} value='emotion'>
              Add an Emotion
            </Button>
            <Button.Or />
            <Button basic color='blue' onClick={event => this.props.onFormButtonClick(event)} value='thought'>
              Add a Thought
            </Button>
          </div>
          <Card.Description>
            Are you feeling any
          </Card.Description>
          <div className='ui two buttons'>
            <Button basic color='teal' onClick={event => this.props.onFormButtonClick(event)} value='stress'>
              Add Stress
            </Button>
            <Button.Or />
            <Button basic color='blue' onClick={event => this.props.onFormButtonClick(event)} value='anxiety'>
              Add Anxiety
            </Button>
          </div>
          <Button basic color='grey' onClick={(event) => this.createMemory(event, {memory: this.props.memory})} value='new'>
              Save These Memories!
            </Button>
        </Card.Content>
      </Card>
      )
    }

}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        memories: state.memories,
        memory: state.memory,
        logged_in: state.logged_in
    };
};

export default connect(mapStateToProps, actions)(NewMemoryForm)