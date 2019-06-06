


import React from 'react'
import { Grid } from 'semantic-ui-react'
import { formatDateTime } from '../formatting'

const EmotionMemoriesList = ({ emotionMemory }) => {
    
return (<Grid.Row key={emotionMemory.id} columns={7}>
    <Grid.Column>
    <p>{formatDateTime(emotionMemory.createdAt)}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{emotionMemory.emotion}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{emotionMemory.pleasure}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{emotionMemory.intensity}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{emotionMemory.stressLevel}</p>
    </Grid.Column>
    <Grid.Column>
    <p>{emotionMemory.anxietyLevel}</p>
    </Grid.Column>
    <Grid.Column>
    </Grid.Column>
  </Grid.Row>)
        }
     
export default EmotionMemoriesList;