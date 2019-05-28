
import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ThoughtOptions extends React.Component {

  handleCancelThought = (event) => {
    this.props.toggleForm({target: {value: 'thoughtOptions'}})
}

  render() {
    return (
    <>
    <Grid.Row centered>
    <Grid.Column width={4}>
    </Grid.Column>
      <Grid.Column centered column width={2}>
      <Header>Journal</Header>
      <Button circular color='brown' size='massive' basic icon="book" value='journal' onClick={() => this.props.toggleForm({target: {value: 'journal'}})}/>
      </Grid.Column>
      <Grid.Column centered width={2}>
      <Header>Idea</Header>
      <Button circular color='yellow' size='massive' basic icon="lightbulb outline" value='idea'  onClick={() => this.props.toggleForm({target: {value: 'idea'}})}/>
      </Grid.Column>
      <Grid.Column centered width={2}>
      <Header>Gratitude</Header>
      <Button circular color='green' size='massive' basic icon="gem outline" value='gratitude' onClick={() => this.props.toggleForm({target: {value: 'gratitude'}})}/>
      </Grid.Column>
      <Grid.Column centered width={2}>
      <Header>Balance</Header>
      <Button circular color='blue' size='massive' basic icon="law"  value='balance' onClick={() => this.props.toggleForm({target: {value: 'balance'}})}/>
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row centered>
  <Button circular color='red' size='massive' basic onClick={this.handleCancelThought} >Cancel</Button>
  </Grid.Row>
  </>
  )
}
}


export default connect(null, actions)(ThoughtOptions)