
import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ActivityOptionSort extends React.Component {


  render() {
    return (
    <>
    <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
      <Grid.Column width={2}>
      <Header>Work</Header>
      <Button circular color='brown' size='massive' basic icon="coffee" value='work' onClick={() => this.props.updateThoughtSelection({target: {value: 'work'}})}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Physical</Header>
      <Button circular color='yellow' size='massive' basic icon="heartbeat" value='physical'  onClick={() => this.props.updateThoughtSelection({target: {value: 'physical'}})}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Social</Header>
      <Button circular color='green' size='massive' basic icon="users" value='social' onClick={() => this.props.updateThoughtSelection({target: {value: 'social'}})}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Entertainment</Header>
      <Button circular color='blue' size='massive' basic icon="bar"  value='entertainment' onClick={() => this.props.updateThoughtSelection({target: {value: 'entertainment'}})}/>
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
  </Grid.Row>
  </>
  )
}
}


export default connect(null, actions)(ActivityOptionSort)