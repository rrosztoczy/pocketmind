
import React from 'react'
import { Grid, Button, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import WorkSelector from '../SelectComponents/WorkSelector.js'
import PhysicalSelector from '../SelectComponents/PhysicalSelector.js'
import SocialSelector from '../SelectComponents/SocialSelector.js'
import EntertainmentSelector from '../SelectComponents/EntertainmentSelector.js'
import * as actions from '../actions'


class ActivityOptionSort extends React.Component {


  render() {
    return (
    <>
    <Grid.Column width={4}>
    </Grid.Column>
      <Grid.Column width={2}>
      {this.props.activitySelection === 'work' ? <Segment><Header>Work</Header><WorkSelector/></Segment> :  <><Header>Work</Header><WorkSelector/></>}
      </Grid.Column>
      <Grid.Column width={2}>
      {this.props.activitySelection === 'physical' ? <Segment><Header>Physical</Header><PhysicalSelector/></Segment> :  <><Header>Physical</Header><PhysicalSelector/></>}
      </Grid.Column>
      <Grid.Column width={2}>
      {this.props.activitySelection === 'social' ? <Segment><Header>Social</Header><SocialSelector/></Segment> :  <><Header>Social</Header><SocialSelector/></>}
      </Grid.Column>
      <Grid.Column width={2}>
      {this.props.activitySelection === 'entertainment' ? <Segment><Header>Entertainment</Header><EntertainmentSelector/></Segment> :  <><Header>Entertainment</Header><EntertainmentSelector/></>}
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
  </>
  )
}
}

const mapStateToProps = state => {
  return {
  activitySelection: state.activitySelection
}
}


export default connect(mapStateToProps, actions)(ActivityOptionSort)