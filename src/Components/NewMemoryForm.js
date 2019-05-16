
import React from 'react'
import { Card, Button } from 'semantic-ui-react'

  export default class NewMemoryForm extends React.Component {

    // console.log("object", trumpet)
    // console.log("content", trumpet.content)
    // Post Body
    //  {
    //     "summary": null,
    //     "trumpet_type": "Missing source",
    //     "content": "Liar, liar, pants on fire.",
    //     "user_id": {populate from current user state, hard code at first},
    //      "url": "http://cnn.com/politics",
    //      "root_url": "http://cnn.com"
    //     }
    // }

    // state = {
    //     memory: {
    //         stressLevel: 0,
    //         anxietyLevel: 0,
    //         timeOfMemory: null,
    //         "default_stress_level_value": true,
    //         "default_anxiety_level_value": true,
    //     },
    //     emotionMemories: [{
    //         userId: null,
    //         memoryId: null,
    //         emotion: "",
    //         intensity: 5,
    //         pleasure: 5 
    //     }],
    // thoughtMemories: [{
    //     userId: null,
    //     memoryId: null,
    //     thoughtContent: "",
    //     thoughtObject: "",
    //     thoughtReason: ""
    // }]
    // }

    // createEmotionMemory = (emotionMemory) => {
    //     this.setState(prevState => ({emotionMemories: [...prevState.emotionMemories, emotionMemory]}))
    // }

    // createThoughtMemory = (thoughtMemory) => {
    //     this.setState(prevState => ({thoughtMemories: [...prevState.thoughtMemories, thoughtMemory]}))
    // }

    // updateStress = (event) => {
    //     this.setState({memory.stressLevel: event.target.value})
    // }

    // updateAnxiety = (event) => {
    //     this.setState({memory.anxietyLevel: event.target.value})
    // }

    // createMemory = () => {

    // }

    //Memory creation flow:
    // When remember is hit:
    // Create a memory with appropriate memory data
    // Fetch that memories id and assign it to the other memory types
    // Create the other types that have data

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
          <Button basic color='grey' onClick={event => this.createMemory()} value='remember'>
              Remember
            </Button>
        </Card.Content>
      </Card>
      )
    }
}