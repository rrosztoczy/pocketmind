import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import { formatDateTime } from '../actions'

const ThoughtMemoriesList = ({ thoughtMemory }) => {
    
return (<Grid.Row columns={3} key={thoughtMemory.id} >
    <Grid.Column width={3}>
    <p>{formatDateTime(thoughtMemory.createdAt)}</p>
    </Grid.Column>
    <Grid.Column width={4}>
    <p>{thoughtMemory.topic}</p>
    </Grid.Column>
    <Grid.Column width={7}>
    <p>{thoughtMemory.thoughtContent}</p>
    </Grid.Column>
    <Grid.Column width={2}>
  {thoughtMemory.id}
  </Grid.Column>
  </Grid.Row>)
        }
     
export default ThoughtMemoriesList;