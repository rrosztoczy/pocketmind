
import React from 'react'
import { Card, Button } from 'semantic-ui-react'

  export default class NewMemoryForm extends React.Component {

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
            <Button basic color='teal' onClick={event => this.props.handleSelectMemoryType(event)} value='emotion'>
              Emotion
            </Button>
            <Button.Or />
            <Button basic color='blue' onClick={event => this.props.handleSelectMemoryType(event)} value='thought'>
              Thought
            </Button>
          </div>
          <Card.Description>
            Are you feeling any
          </Card.Description>
          <div className='ui two buttons'>
            <Button basic color='teal' onClick={event => this.props.handleSelectMemoryType(event)} value='stress'>
              Stress
            </Button>
            <Button.Or />
            <Button basic color='blue' onClick={event => this.props.handleSelectMemoryType(event)} value='anxiety'>
              Anxiety
            </Button>
          </div>
          <Button basic color='grey' onClick={event => this.props.submitMemory(event)} value='remember'>
              Remember
            </Button>
        </Card.Content>
      </Card>
      )
    }

    // const mapStateToProps = state => {
    //     console.log("new state", state)
    //     return {
    //         memories: state.memories,
    //         logged_in: state.logged_in
    //     };
    // };
     
    // const mapDispatchToProps = dispatch => {
    //     console.log('about to send finction')
    //     return {
    //         addMemory: () => dispatch({type: 'NEW_MEMORY', payload: {} })
    //     };
    // };

}