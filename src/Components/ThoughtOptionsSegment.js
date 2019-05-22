import React from 'react'
import { Header, Segment, Reveal, Button } from 'semantic-ui-react'

const square = { width: 120, height: 120 }
const smallSquare = { width: 100, height: 100 }

const ThoughtOptionsSegment = () => (
    <Reveal animated='rotate left'>
      <Reveal.Content visible>
        <Segment circular style={square}>
          <Header as='h2'>
            Think
            <Header.Subheader>+</Header.Subheader>
          </Header>
        </Segment>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Segment circular style={smallSquare} inverted color='teal' tertiary>
      <Button circular size='massive' inverted color='teal' icon='lightbulb' />
        </Segment>
      </Reveal.Content>
    </Reveal>
)

export default ThoughtOptionsSegment