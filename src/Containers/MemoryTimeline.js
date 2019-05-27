
import React, { Component } from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react'
import MoodEnergyTimelineChart from '../ChartComponents/MoodEnergyTimelineChart'
import StressAnxietyTimelineChart from '../ChartComponents/StressAnxietyTimelineChart'

class MemoryTimeline extends Component {
    componentDidMount() {
    this.props.getAllUserMemories()
}
    render() {
        // TODO: This chart will be daily averages... with a daily bar range if possible
        // TODO: Underneath each of these put a thought/activity record table
        return (
            <Grid divided='vertically'>
                 <Grid.Row centered>
              </Grid.Row>
              <Grid.Row centered>
              <h3>Mood and Energy Levels</h3>
              </Grid.Row>
              <Grid.Row centered>
              <MoodEnergyTimelineChart/>
              </Grid.Row>
              <Grid.Row centered>
              <h3>Stress and Anxiety Levels</h3>
              </Grid.Row>
              <Grid.Row centered>
              <StressAnxietyTimelineChart/>
              </Grid.Row>
            </Grid>
        )
    }
}

export default connect(null, actions)(MemoryTimeline)