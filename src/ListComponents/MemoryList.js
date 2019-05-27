import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

const MemoriesList = ({ memory }) => {
    
return (
    <Grid.Row key={memory.id} columns={7}>
        <Grid.Column>
        <p>{memory.createdAt}</p>
        </Grid.Column>
        <Grid.Column>
        <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.emotion}</p>) : "No emotion memories"}</p>
        </Grid.Column>
        <Grid.Column>
        <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.stressLevel}</p>) : "No emotion memories"}</p>
        </Grid.Column>
        <Grid.Column>
        <p>{memory.emotionMemories ? memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.anxietyLevel}</p>) : "No emotion memories"}</p>
        </Grid.Column>
        <Grid.Column>
        <p>{memory.thoughtMemories ? memory.thoughtMemories.map((thoughtMemory, index) => <p>{index+1}. {thoughtMemory.thoughtContent}</p>) : "No thought memories"}</p>
        </Grid.Column>
        <Grid.Column>
        <p>{memory.activityMemories ? memory.activityMemories.map((activityMemory, index) => <p>{index+1}. {activityMemory.activityName}</p>) : "No activity memories"}</p>
        </Grid.Column>
        <Grid.Column>
        <p>{memory.id}</p>
        </Grid.Column>
    </Grid.Row>)
        }
     
export default MemoriesList;