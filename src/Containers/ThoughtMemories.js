import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ThoughtOptionSort from '../Components/ThoughtOptionSort'
import ThoughtMemoryContainer from './ThoughtMemoryContainer'
import ThoughtMemoryBalanceContainer from './ThoughtMemoryBalanceContainer'
import ThoughtMemoriesByType from '../ChartComponents/ThoughtMemoriesByType'
import ThoughtMemoriesHeader from '../HeaderComponents/ThoughtMemoriesHeader'
import ThoughtMemoriesBalanceHeader from '../HeaderComponents/ThoughtMemoriesBalanceHeader'
import * as actions from '../actions'

class ThoughtMemories extends React.Component {

state = {
    editedThoughtMemories: {}
}

renderEditButton() {
  return <Button color='teal' size='small' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.onEditButtonClick(event)}>Edit</Button>
}

renderSubmitEditButton() {
  return <Button color='teal' size='small' value='editThoughtMemories' name='editThoughtMemories' onClick={event => this.handleSubmitEdit(event)}>Submit</Button>
}


renderThoughtMemoriesHeader() {
  return this.props.thoughtSelection === 'balance' ? <ThoughtMemoriesBalanceHeader editThoughtMemories={this.props.editThoughtMemories} renderEditButton={() => this.renderEditButton()} renderSubmitEditButton={() => this.renderSubmitEditButton()}/> : <ThoughtMemoriesHeader editThoughtMemories={this.props.editThoughtMemories} renderEditButton={() => this.renderEditButton()} renderSubmitEditButton={() => this.renderSubmitEditButton()}/>
}

renderThoughtMemoryList() {
  return this.props.thoughtSelection === 'balance' ? <ThoughtMemoryBalanceContainer/> : <ThoughtMemoryContainer/>
}

onEditButtonClick = (event) => {
  event.persist()
  this.props.toggleForm(event)
}

handleSubmitEdit = (event) => {
  const editedThoughtMemoryArray = Object.keys(this.state.editedThoughtMemories)
  editedThoughtMemoryArray.forEach(editedThoughtMemoryId => this.props.updateThoughtMemory(editedThoughtMemoryId, this.state.editedThoughtMemories[editedThoughtMemoryId]))
  this.props.getAllUserMemories()
  this.onEditButtonClick(event)
}

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row centered>
      <ThoughtMemoriesByType />
    </Grid.Row>
    <ThoughtOptionSort/>
    {this.renderThoughtMemoriesHeader()}
    {this.renderThoughtMemoryList()}
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