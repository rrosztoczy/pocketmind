import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

const MemoriesHeader = ({ edit, renderEditButton, renderSubmitEditButton }) => {
    
return (<Grid.Row verticalAlign='middle' columns={7}>
    <Grid.Column>
    <p>Time</p>
    </Grid.Column>
    <Grid.Column>
    <p>Emotions</p>
    </Grid.Column>
    <Grid.Column>
    <p>Stress Level</p>
    </Grid.Column>
    <Grid.Column>
    <p>Anxiety Level</p>
    </Grid.Column>
    <Grid.Column>
    <p>Thoughts</p>
    </Grid.Column>
    <Grid.Column>
    <p>Activities</p>
    </Grid.Column>
    <Grid.Column>
    {edit ? renderSubmitEditButton() : renderEditButton()}
    </Grid.Column>
  </Grid.Row>)
        }
     
export default MemoriesHeader;