import React from 'react'
import { connect } from 'react-redux';
import { Grid, Input, Button } from 'semantic-ui-react'

class MemoriesEdit extends React.Component {

    render() {
return (
    <Grid.Row key={this.props.memory.id} columns={7}>
              <Grid.Column>
              <Input focus value={this.props.editedMemories[this.props.memory.id] && this.props.editedMemories[this.props.memory.id].createdAt ? this.props.editedMemories[this.props.memory.id].createdAt : this.props.memory.createdAt} name='createdAt' onChange={(event, memoryId) => this.props.handleMultiEditChange(event, this.props.memory.id)}/>
              </Grid.Column>
              <Grid.Column>
              {this.props.memory.emotionMemories ? this.props.memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.emotion}</p>) : "No emotion memories"}
              </Grid.Column>
              <Grid.Column>
             {this.props.memory.emotionMemories ? this.props.memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.stressLevel}</p>) : "No emotion memories"}
              </Grid.Column>
              <Grid.Column>
              {this.props.memory.emotionMemories ? this.props.memory.emotionMemories.map((emotionMemory, index) => <p>{index+1}. {emotionMemory.anxietyLevel}</p>) : "No emotion memories"}
              </Grid.Column>
              <Grid.Column>
              {this.props.memory.thoughtMemories ? this.props.memory.thoughtMemories.map((thoughtMemory, index) => <p>{index+1}. {thoughtMemory.thoughtContent}</p>) : "No thought memories"}
              </Grid.Column>
              <Grid.Column>
              {this.props.memory.activityMemories ? this.props.memory.activityMemories.map((activityMemory, index) => <p>{index+1}. {activityMemory.activityName}</p>) : "No activity memories"}
              </Grid.Column>
              <Grid.Column>
              <Button onClick={() => this.props.destroyMemory(this.props.memory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        }
    }
     
export default MemoriesEdit;