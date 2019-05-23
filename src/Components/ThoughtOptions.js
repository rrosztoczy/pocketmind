
import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ThoughtOptions extends React.Component {
  render() {
    return (
    <>
    <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
      <Grid.Column width={2}>
      <Header>Journal</Header>
      <Button circular color='brown' size='massive' basic icon="book" value='journal' onClick={this.props.toggleForm({target: {value:'journal'}})}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Idea</Header>
      <Button circular color='yellow' size='massive' basic icon="lightbulb outline" value='idea'  onClick={this.props.toggleForm({target: {value: 'idea'}})}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Gratitude</Header>
      <Button circular color='green' size='massive' basic icon="gem outline" value='gratitude' onClick={this.props.toggleForm({target: {value: 'gratitude'}})}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header>Balance</Header>
      <Button circular color='blue' size='massive' basic icon="law"  value='balance' onClick={this.props.toggleForm({target: {value: 'balance'}})}/>
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
  </Grid.Row>
  </>
  )
}
}

const mapStateToProps = state => {
  console.log("new state", state)
  return {
      journal: state.journal,
      idea: state.idea,
      gratitude: state.gratitude,
      balance: state.balance,
      logged_in: state.logged_in
  };
};

export default connect(mapStateToProps, actions)(ThoughtOptions)