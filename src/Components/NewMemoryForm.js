
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
    state = {}

    // handleChange = (event) => this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state))

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
        </Card.Content>
      </Card>
      )
    }
}