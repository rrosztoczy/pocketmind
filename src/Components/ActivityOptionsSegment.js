import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const square = { width: 120, height: 120 }

const ActivityOptionsSegment = () => (
    <Segment circular style={square}>
      <Header as='h2'>
        Do
        <Header.Subheader>+</Header.Subheader>
      </Header>
    </Segment>
)

export default ActivityOptionsSegment