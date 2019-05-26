import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtOptionsSegment from '../Components/ThoughtOptionsSegment'
import ByWeekThoughtType from '../ChartComponents/ByWeekThoughtType'

const ThoughtDefault = () => (
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column textAlign='center' width={3}>
      <ThoughtOptionsSegment/>
      </Grid.Column>
 <Grid.Column width={8}>
 <ByWeekThoughtType/>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

)

export default ThoughtDefault