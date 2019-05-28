import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

const ThoughtMemoriesHeader = ({ editThoughtMemories, renderEditButton, renderSubmitEditButton }) => {
    
return (<Grid.Row columns={4}>
    <Grid.Column width={3}>
    <p>Time</p>
    </Grid.Column>
    <Grid.Column  width={4}>
    <p>Thought Topic</p>
    </Grid.Column>
    <Grid.Column  width={7}>
    <p>Thought Content</p>
    </Grid.Column>
    <Grid.Column width={2}>
    {editThoughtMemories ? renderSubmitEditButton() : renderEditButton()}
    </Grid.Column>
  </Grid.Row>)
        }
     
export default ThoughtMemoriesHeader;