import React from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'

const LandingPage = () => (
  <Grid padded relaxed stackable>
      <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header size='huge' color='blue' textAlign='center'>
          pocket mind
        </Header>
        <Header size='medium' color='blue' textAlign='center'>
          keep your head in the cloud
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} divided>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' size='massive' circular>
              SIGN UP FOR FREE
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' size='massive' circular>
              GET THE APP NOW
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} divided>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} divided>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Image src={require('../pmlogo.jpeg')} size="small" verticalAlign='middle'/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} divided>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default LandingPage