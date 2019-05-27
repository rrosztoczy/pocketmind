import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtOptionsSegment from '../Components/ThoughtOptionsSegment'
import ByWeekThoughtType from '../ChartComponents/ByWeekThoughtType'

const ThoughtDefault = () => (
    <Grid.Row>
      <Grid.Column width={6}>
      </Grid.Column>
      <Grid.Column textAlign='center' width={4}>
      <ThoughtOptionsSegment/>
      </Grid.Column>
 {/* <Grid.Column width={8}>
 <ByWeekThoughtType/>
      </Grid.Column> */}
      <Grid.Column width={6}>
      </Grid.Column>
    </Grid.Row>

)

export default ThoughtDefault