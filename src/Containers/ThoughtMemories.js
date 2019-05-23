import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtOptions from '../Components/ThoughtOptions'
import JournalContainer from './JournalContainer'
import IdeaContainer from './IdeaContainer'
import GratitudeContainer from './GratitudeContainer'
import BalanceContainer from './BalanceContainer'
import * as actions from '../actions'

class ThoughtMemories extends React.Component {


    componentDidMount() {
      this.props.getAllUserMemories()
    }


state = {
    editedThoughtMemories: {}
}


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
    <ThoughtOptions/>
    {/* Conditionally render memory container based on selection, default with journal */}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            thoughtMemories: state.thoughtMemories,
            editThoughtMemories: state.editThoughtMemories
        };
    };
     

export default connect(mapStateToProps, actions)(ThoughtMemories);