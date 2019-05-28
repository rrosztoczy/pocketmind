import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

const EmotionMemoriesHeader = ({ editEmotionMemories, renderEditButton, renderSubmitEditButton }) => {
    
return (<Grid.Row verticalAlign='middle' columns={7}>
    <Grid.Column>
    <p>Time</p>
    </Grid.Column>
    <Grid.Column>
    <p>Emotion</p>
    </Grid.Column>
    <Grid.Column>
    <p>Mood</p>
    </Grid.Column>
    <Grid.Column>
    <p>Energy</p>
    </Grid.Column>
    <Grid.Column>
    <p>Stress</p>
    </Grid.Column>
    <Grid.Column>
    <p>Anxiety</p>
    </Grid.Column>
    <Grid.Column>
    {editEmotionMemories ? renderSubmitEditButton() : renderEditButton()}
    </Grid.Column>
  </Grid.Row>)
        }
     
export default EmotionMemoriesHeader;