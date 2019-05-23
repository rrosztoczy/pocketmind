import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FeelingOptionsSegment from '../Components/FeelingOptionsSegment'
import EmotionSelector from '../Components/EmotionSelector'
import * as actions from '../actions'

const EmotionDefault = () => (
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column textAlign='center' width={3}>
      <FeelingOptionsSegment/>
      </Grid.Column>
    <Grid.Column width={8}>
        <Header>Show small emotions chart here...</Header>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>

)

export default EmotionDefault