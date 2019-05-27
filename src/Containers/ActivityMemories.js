import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ActivityOptionSort from '../Components/ActivityOptionSort'
import ActivityMemoryContainer from './ActivityMemoryContainer'
import ActivityMemoriesByType from '../ChartComponents/ActivityMemoriesByType'
import * as actions from '../actions'

class ActivityMemories extends React.Component {


    // componentDidMount() {
    //   this.props.getAllUserMemories()
    // }


state = {
    editedActivityMemories: {}
}

renderActivityList() {
  console.log('rendered list!')
//   TODO: Can possible take out the switch statement here
  switch (this.props.activitySelection) {
    case  'work':
    console.log('case work')
    return <ActivityMemoryContainer/>
    case  'physical':
    return <ActivityMemoryContainer/>
    case  'social':
    return <ActivityMemoryContainer/>
    case  'entertainment':
    return <ActivityMemoryContainer/>
    default: 
    return <ActivityMemoryContainer/>
    }
}

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      <ActivityMemoriesByType />
      </Grid.Column>
    </Grid.Row>
    <ActivityOptionSort/>
    {/* Conditionally render memory container based on selection, default with journal */}
    {/* Have two components: one for default, journal, gratitude and idea, one for balance. Render the appropriate journal, grat or idea based on state set by button*/}
    {this.renderActivityList()}
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