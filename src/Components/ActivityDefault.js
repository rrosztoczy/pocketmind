import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ActivityOptionsSegment from '../Components/ActivityOptionsSegment'
import ActivityMemoriesByType from '../ChartComponents/ActivityMemoriesByType'

const ActivityDefault = () => (
    <Grid.Row centered>
      <ActivityOptionsSegment/>
    </Grid.Row>

)

export default ActivityDefault