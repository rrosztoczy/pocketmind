import React from 'react'
import { Grid } from 'semantic-ui-react'
import { formatDateTime } from '../formatting'

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
    </Grid.Column>
  </Grid.Row>)
        }
     
export default ActivityMemoriesList;