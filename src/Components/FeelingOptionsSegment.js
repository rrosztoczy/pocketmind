import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const square = { width: 120, height: 120 }

const FeelingOptionsSegment = () => (
    <Segment circular style={square}>
      <Header as='h2'>
        Feel
        <Header.Subheader>+</Header.Subheader>
      </Header>
    </Segment>
)

export default FeelingOptionsSegment