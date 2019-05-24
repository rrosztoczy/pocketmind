
import React, { Component } from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import MemoryTimelineChart from '../Components/MemoryTimelineChart'
import StressAnxietyTimelineChart from '../Components/StressAnxietyTimelineChart'

class MemoryTimeline extends Component {
    componentDidMount() {
    this.props.getAllUserMemories()
}
    render() {
        return (
            <Grid celled>
              <Grid.Column width={8}>
              <Grid.Row>
              <h3>Mood and Energy Levels</h3>
              <MemoryTimelineChart/>
              </Grid.Row>
              </Grid.Column>
              <Grid.Column width={8}>
              <Grid.Row>
              <h3>Stress and Anxiety Levels</h3>
              <StressAnxietyTimelineChart/>
              </Grid.Row>
              </Grid.Column>
            </Grid>
        )
    }
}

export default connect(null, actions)(MemoryTimeline)