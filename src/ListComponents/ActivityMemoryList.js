import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import { formatDateTime } from '../actions'

const ActivityMemoriesList = ({ activityMemory }) => {
    
return (<Grid.Row columns={6} key={activityMemory.id} >
    <Grid.Column>
    <p>{formatDateTime(activityMemory.createdAt)}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{activityMemory.activityName}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{activityMemory.activityDescription}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{activityMemory.activityStartTime}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{activityMemory.activityEndTime}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{activityMemory.memoryId}</p>
    </Grid.Column>
  </Grid.Row>)
        }
     
export default ActivityMemoriesList;