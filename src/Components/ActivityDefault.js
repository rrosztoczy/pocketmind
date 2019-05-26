import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ActivityOptionsSegment from '../Components/ActivityOptionsSegment'
import ActivityMemoriesByType from '../ChartComponents/ActivityMemoriesByType'

const ActivityDefault = () => (
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column textAlign='center' width={3}>
      <ActivityOptionsSegment/>
      </Grid.Column>
 <Grid.Column width={8}>
 <ActivityMemoriesByType/>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

)

export default ActivityDefault