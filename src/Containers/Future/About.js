import React from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'

const About = () => (
  <Grid divided='vertically'>

    <Grid.Row columns={1}>
    <Grid.Column>
    <Header>
    <h2>The Vision</h2>
    </Header>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header>
    <h2>The Product</h2>
    </Header>
    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header>
    <h2>The Team</h2>
    </Header>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default About