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

filteredUserThoughtMemories() {
  let userThoughtMemories = []
  this.props.memories.forEach(memory => memory.thoughtMemories.forEach(thoughtMemory => userThoughtMemories.push(thoughtMemory)))
  let filteredUserThoughtMemories = userThoughtMemories.filter(thoughtMemory => thoughtMemory.thoughtType===this.props.thoughtSelection)
  console.log(filteredUserThoughtMemories)
  let sortedFilteredUserThoughtMemories = [...filteredUserThoughtMemories].sort(function(a,b) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  });
  console.log("sorted", sortedFilteredUserThoughtMemories)
  return sortedFilteredUserThoughtMemories
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
  return this.props.thoughtSelection === 'balance' ? <ThoughtMemoryBalanceContainer handleMultiEditChange={(event, thoughtMemoryId) => this.handleMultiEditChange(event, thoughtMemoryId)}/> : <ThoughtMemoryContainer handleMultiEditChange={(event, thoughtMemoryId) => this.handleMultiEditChange(event, thoughtMemoryId)} editedThoughtMemories={this.state.editedThoughtMemories}/>
}

onEditButtonClick = (event) => {
  event.persist()
  this.props.toggleForm(event)
}

handleMultiEditChange = (event, thoughtMemoryId) => {
  event.persist()
  console.log('editing')
  this.state.editedThoughtMemories[thoughtMemoryId] ? this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...prevState.editedThoughtMemories[thoughtMemoryId], [event.target.name]: event.target.value}}})) : this.setState((prevState) => ({editedThoughtMemories: {...prevState.editedThoughtMemories, [thoughtMemoryId]: {...this.filteredUserThoughtMemories().find(thoughtMemory => thoughtMemory.id === thoughtMemoryId), [event.target.name]: event.target.value}}}))
}

handleSubmitEdit = (event) => {
  const editedThoughtMemoryArray = Object.keys(this.state.editedThoughtMemories)
  console.log('step one done main thought')
  editedThoughtMemoryArray.forEach(editedThoughtMemoryId => this.props.updateThoughtMemory(editedThoughtMemoryId, this.state.editedThoughtMemories[editedThoughtMemoryId]))
  console.log('step two done main thought')
  this.props.getAllUserMemories()
  console.log('step three done main thought')
  this.onEditButtonClick(event)
  console.log('step four done mainthought')
}

// TODO: Set type of thought memory based on button pressed in the form generator


    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row centered><ThoughtMemoriesByType /></Grid.Row>
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