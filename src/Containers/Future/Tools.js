import React from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'

const Tools = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      {/* <Image src={require('../pmlogo.jpeg')} size="small" verticalAlign='middle'/> */}
      <Header as='h1' color='blue' textAlign='center'>
          YOU ARE IN YOUR TOOLS
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' fluid size='large'>
              SIGN UP FOR FREE
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' fluid size='large'>
              GET THE APP NOW
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2}>
      <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Tools