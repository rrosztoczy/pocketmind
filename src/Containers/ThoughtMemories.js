import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtOptionSort from '../Components/ThoughtOptionSort'
import ThoughtMemoryContainer from './ThoughtMemoryContainer'
import ThoughtMemoryBalanceContainer from './ThoughtMemoryBalanceContainer'
import ThoughtMemoriesByType from '../ChartComponents/ThoughtMemoriesByType'
import * as actions from '../actions'

class ThoughtMemories extends React.Component {

state = {
    editedThoughtMemories: {}
}

renderThoughtList() {
  console.log('rendered list!')
  switch (this.props.thoughtSelection) {
    case  'balance':
    return <ThoughtMemoryBalanceContainer/>
    default: 
    return <ThoughtMemoryContainer/>
    }
}

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row centered>
      <ThoughtMemoriesByType />
    </Grid.Row>
    <ThoughtOptionSort/>
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