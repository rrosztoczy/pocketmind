
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
            <Grid celled>
              <Grid.Column width={8}>
              <Grid.Row>
              <h3>Mood and Energy Levels</h3>
              <MoodEnergyTimelineChart/>
              </Grid.Row>
              <Grid.Row>
              <h3>Stress and Anxiety Levels</h3>
              <StressAnxietyTimelineChart/>
              </Grid.Row>
              </Grid.Column>
              <Grid.Column width={8}>
              <Grid.Row>
                <Header>Thought data based on datapoint click</Header>
              </Grid.Row>
              <Grid.Row>
              <Header>Thought data based on datapoint click</Header>
                </Grid.Row>
              </Grid.Column>
            </Grid>
        )
    }
}

export default connect(null, actions)(MemoryTimeline)