import React from 'react'
import { Grid } from 'semantic-ui-react'
import { formatDateTime } from '../formatting'


const MemoriesList = ({ memory }) => {

 
      
    
return (
    <Grid.Row key={memory.id} columns={7}>
        <Grid.Column>
        <p>{formatDateTime(memory.createdAt)}</p>
        </Grid.Column>
        <Grid.Column>
        {memory.emotionMemories != [] ? memory.emotionMemories.map((emotionMemory, index) => <p>{emotionMemory.emotion}</p>) : <p>No associated emotions</p>}
        </Grid.Column>
        <Grid.Column>
        {memory.emotionMemories != [] ? memory.emotionMemories.map((emotionMemory, index) => <p>{emotionMemory.stressLevel}</p>) : <p>No emotion memories</p>}
        </Grid.Column>
        <Grid.Column>
        {memory.emotionMemories != [] ? memory.emotionMemories.map((emotionMemory, index) => <p>{emotionMemory.anxietyLevel}</p>) : <p>No emotion memories</p>}
        </Grid.Column>
        <Grid.Column>
        {memory.thoughtMemories != [] ? memory.thoughtMemories.map((thoughtMemory, index) => <p>{thoughtMemory.topic}</p>) : <p>No thought memories</p>}
        </Grid.Column>
        <Grid.Column>
        {memory.activityMemories != [] ? memory.activityMemories.map((activityMemory, index) => <p>{activityMemory.activityName}</p>) : <p>No activity memories</p>}
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
    </Grid.Row>)
        }
     
export default MemoriesList;