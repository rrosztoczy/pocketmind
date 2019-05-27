import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ActivityOptionSort from '../Components/ActivityOptionSort'
import ActivityMemoryContainer from './ActivityMemoryContainer'
import ActivityMemoriesByType from '../ChartComponents/ActivityMemoriesByType'
import * as actions from '../actions'

class ActivityMemories extends React.Component {

state = {
    editedActivityMemories: {}
}

    render() {
        return (
  <Grid divided='vertically'>
  {/* <Grid.row centered> */}
  <Grid.Row centered>
      <ActivityMemoriesByType />
      {/* </Grid.row> */}
      </Grid.Row>
    <ActivityOptionSort/>
    <Grid.Row centered>
    <ActivityMemoryContainer/>
    </Grid.Row>
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            activitySelection: state.activitySelection,
            editActivityMemories: state.editActivityMemories
        };
    };
     

export default connect(mapStateToProps, actions)(ActivityMemories);