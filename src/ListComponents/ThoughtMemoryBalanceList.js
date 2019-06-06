import React from 'react'
import { Grid } from 'semantic-ui-react'
import { formatDateTime } from '../formatting'

const ThoughtMemoriesBalanceList = ({ thoughtMemory }) => {
    
return (<Grid.Row columns={4} key={thoughtMemory.id} >
    <Grid.Column width={2}>
    <p>{formatDateTime(thoughtMemory.createdAt)}</p>
    </Grid.Column>
    <Grid.Column width={5}>
    <p>{thoughtMemory.automaticThought}</p>
    </Grid.Column>
    <Grid.Column width={2}>
    <p>{thoughtMemory.cognitiveBias}</p>
    </Grid.Column>
    <Grid.Column width={5}>
    <p>{thoughtMemory.rationalThought}</p>
    </Grid.Column>
    <Grid.Column width={2}>
    </Grid.Column>
  </Grid.Row>)
        }
     
export default ThoughtMemoriesBalanceList;