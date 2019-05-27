import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

const ThoughtMemoriesBalanceHeader = ({ editThoughtMemories, renderEditButton, renderSubmitEditButton }) => {
    
return (<Grid.Row columns={4}>
    <Grid.Column width={2}>
    <p>Time</p>
    </Grid.Column>
    <Grid.Column width={5}>
    <p>Automatic Thought</p>
    </Grid.Column>
    <Grid.Column width={2}>
    <p>Cognitive Bias</p>
    </Grid.Column>
    <Grid.Column width={5}>
    <p>Rational Response</p>
    </Grid.Column>
    <Grid.Column width={2}>
    {editThoughtMemories ? renderSubmitEditButton() : renderEditButton()}
</Grid.Column>
  </Grid.Row>)
        }
     
export default ThoughtMemoriesBalanceHeader;