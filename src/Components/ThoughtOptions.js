
import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'

const ThoughtOptions = () => (
    <>
    <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
      <Grid.Column width={2}>
      <Header>Journal</Header>
      <Button circular color='brown' size='massive' basic icon="book"/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Idea</Header>
      <Button circular color='yellow' size='massive' basic icon="lightbulb outline"/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Gratitude</Header>
      <Button circular color='green' size='massive' basic icon="gem outline"/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Balance</Header>
      <Button circular color='blue' size='massive' basic icon="law"/>
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
  </Grid.Row>
  </>
)

export default ThoughtOptions