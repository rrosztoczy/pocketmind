
import React from 'react'
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react'
import * as actions from '../actions'

class NewMemoryForm extends React.Component {

    formatNestedAttributes(memory) {
        console.log("hash before", memory)
        let nestedFormatMemory = {...memory}
        // turn array into nested hash here
        console.log("hash after", nestedFormatMemory)
    }

    createMemory(memory) {
        // transform arrays of has_many records to hashes for ruby
        console.log("About to create memory!", memory)
        this.props.createMemory(memory)
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
              Emotion
            </Button>
            <Button.Or />
            <Button basic color='blue' onClick={event => this.props.onFormButtonClick(event)} value='thought'>
              Thought
            </Button>
          </div>
          <Card.Description>
            Are you feeling any
          </Card.Description>
          <div className='ui two buttons'>
            <Button basic color='teal' onClick={event => this.props.onFormButtonClick(event)} value='stress'>
              Stress
            </Button>
            <Button.Or />
            <Button basic color='blue' onClick={event => this.props.onFormButtonClick(event)} value='anxiety'>
              Anxiety
            </Button>
          </div>
          <Button basic color='grey' onClick={() => this.createMemory(this.props.memory)} value='remember'>
              Remember
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