import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

const ActivityMemoriesHeader = ({ editActivityMemories, renderEditButton, renderSubmitEditButton }) => {
    
return (<Grid.Row columns={6}>
    <Grid.Column>
    <p>Time</p>
    </Grid.Column>
    <Grid.Column>
    <p>Name</p>
    </Grid.Column>
    <Grid.Column>
    <p>Description</p>
    </Grid.Column>
    <Grid.Column>
    <p>Start</p>
    </Grid.Column>
    <Grid.Column>
    <p>End</p>
    </Grid.Column>
    <Grid.Column>
    {editActivityMemories ? renderSubmitEditButton() : renderEditButton()}
    </Grid.Column>
  </Grid.Row>)
        }
     
export default ActivityMemoriesHeader;