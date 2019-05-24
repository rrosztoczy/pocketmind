import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtOptionSort from '../Components/ThoughtOptionSort'
import JournalContainer from './JournalContainer'
import IdeaContainer from './IdeaContainer'
import GratitudeContainer from './GratitudeContainer'
import BalanceContainer from './BalanceContainer'
import ThoughtMemoryContainer from './ThoughtMemoryContainer'
import ThoughtMemoryBalanceContainer from './ThoughtMemoryBalanceContainer'
import * as actions from '../actions'

class ThoughtMemories extends React.Component {


    componentDidMount() {
      this.props.getAllUserMemories()
    }


state = {
    editedThoughtMemories: {}
}

renderThoughtList() {
  console.log('rendered list!')
  switch (this.props.thoughtSelection) {
    case  'journal':
    console.log('case journal')
    return <ThoughtMemoryContainer/>
    case  'idea':
    return <ThoughtMemoryContainer/>
    case  'gratitude':
    return <ThoughtMemoryContainer/>
    case  'balance':
    return <ThoughtMemoryBalanceContainer/>
    default: 
    return <ThoughtMemoryContainer/>
    }
}

// componentDidUpdate() {
//   this.renderThoughtList()
// }


    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      <Header as='h1' color='blue' textAlign='center'>
          YOU ARE IN YOUR THOUGHT MEMORIES
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Thought Memories
            </Header>
      </Grid.Column>
    </Grid.Row>
    <ThoughtOptionSort/>
    {/* Conditionally render memory container based on selection, default with journal */}
    {/* Have two components: one for default, journal, gratitude and idea, one for balance. Render the appropriate journal, grat or idea based on state set by button*/}
    {this.renderThoughtList()}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            thoughtMemories: state.thoughtMemories,
            thoughtSelection: state.thoughtSelection,
            editThoughtMemories: state.editThoughtMemories
        };
    };
     

export default connect(mapStateToProps, actions)(ThoughtMemories);