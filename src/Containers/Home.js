import React from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'

const Home = () => (
  <Grid style={{height: '100vh'}}>
    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  
    <Grid.Row columns={4} >
      <Grid.Column width={2}>
      spacing column
      </Grid.Column>
      <Grid.Column width={3}>
      <Button color='teal' fluid size='small' circular>
             + <br/> Emotion
            </Button>
      </Grid.Column>
      <Grid.Column width={9}>
      <Button color='teal' fluid size='large'>
              SIGN UP FOR FREE
            </Button>
      </Grid.Column>
      <Grid.Column width={2}>
      spacing column
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      spacing column
      </Grid.Column>
      <Grid.Column width={3}>
      <Button color='teal' fluid size='small' circular>
      + <br/> Thought
            </Button>
      </Grid.Column>
      <Grid.Column width={9}>
      <Button color='teal' fluid size='large'>
              SIGN UP FOR FREE
            </Button>
      </Grid.Column>
      <Grid.Column width={2}>
      spacing column
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={2}>
      spacing column
      </Grid.Column>
      <Grid.Column width={3}>
      <Button color='teal' fluid size='small' circular>
      + <br/> Activity
            </Button>
      </Grid.Column>
      <Grid.Column width={9}>
      <Button color='teal' fluid size='large'>
              SIGN UP FOR FREE
            </Button>
      </Grid.Column>
      <Grid.Column width={2}>
      spacing column
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' circular size='large'>
              Send this memory to space!
            </Button>
      </Grid.Column>
    </Grid.Row>

  <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
  </Grid.Row>
  </Grid>
)

export default Home