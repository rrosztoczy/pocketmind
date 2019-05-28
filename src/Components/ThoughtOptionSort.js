
import React from 'react'
import { Grid, Button, Header, Icon, Input, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import JournalSelector from '../SelectComponents/JournalSelector'
import IdeaSelector from '../SelectComponents/IdeaSelector'
import GratitudeSelector from '../SelectComponents/GratitudeSelector'
import BalanceSelector from '../SelectComponents/BalanceSelector'
import * as actions from '../actions'

class ThoughtOptionSort extends React.Component {


  render() {
    return (
    <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
      <Grid.Column width={2}>
      {this.props.thoughtSelection === 'journal' ? <Segment><Header>Journal</Header><JournalSelector/></Segment> :  <><Header>Journal</Header><JournalSelector/></>}
      </Grid.Column>
      <Grid.Column width={2}>
      {this.props.thoughtSelection === 'idea' ? <Segment><Header>Idea</Header><IdeaSelector/></Segment> :  <><Header>Idea</Header><IdeaSelector/></>}
      </Grid.Column>
      <Grid.Column width={2}>
      {this.props.thoughtSelection === 'gratitude' ? <Segment><Header>Gratitude</Header><GratitudeSelector/></Segment> :  <><Header>Gratitude</Header><GratitudeSelector/></>}
      </Grid.Column>
      <Grid.Column width={2}>
      {this.props.thoughtSelection === 'balance' ? <Segment><Header>Balance</Header><BalanceSelector/></Segment> :  <><Header>Balance</Header><BalanceSelector/></>}
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
  </Grid.Row>
  )
}
}

const mapStateToProps = state => {
  return {
    thoughtSelection: state.thoughtSelection
  }
}


export default connect(mapStateToProps, actions)(ThoughtOptionSort)