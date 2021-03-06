import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import ActivityMemoryList from '../ListComponents/ActivityMemoryList'
import ActivityMemoriesHeader from '../HeaderComponents/ActivityMemoriesHeader'
import * as actions from '../actions'

class ActivityMemoryContainer extends React.Component {


    state = {
        editedActivityMemories: {}
    }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    componentDidUpdate() {
        if (this.props.updating === true) {
            console.log('should get all use mems next')
        this.props.getAllUserMemories()
        }
        // return this.render()
    }

    filteredUserActivityMemories() {
        let userActivityMemories = []
        this.props.memories.forEach(memory => {
            if (memory.activityMemories) {
            memory.activityMemories.forEach(activityMemory => userActivityMemories.push(activityMemory))
        }})
        let filteredUserActivityMemories = userActivityMemories.filter(activityMemory => activityMemory.activityType===this.props.activitySelection)
        console.log(filteredUserActivityMemories)
        let sortedFilteredUserActivityMemories = [...filteredUserActivityMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        console.log("sorted", sortedFilteredUserActivityMemories)
        return sortedFilteredUserActivityMemories
    }

    // TODO: Set type of Activity memory based on button pressed in the form generator

    renderActivityMemories() {
        console.log("activity props during ac mem render", this.props.memories)
        return this.filteredUserActivityMemories().map(activityMemory => {
            return <ActivityMemoryList key={"am" + activityMemory.id} activityMemory={activityMemory} />
        })

    }

handleMultiEditChange = (event, activityMemoryId) => {
    event.persist()
    console.log('hanlding change!')
    this.state.editedActivityMemories[activityMemoryId] ? this.setState((prevState) => ({editedActivityMemories: {...prevState.editedActivityMemories, [activityMemoryId]: {...prevState.editedActivityMemories[activityMemoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second Activity memories!', this.state)) : this.setState((prevState) => ({editedActivityMemories: {...prevState.editedActivityMemories, [activityMemoryId]: {...this.filteredUserActivityMemories().find(activityMemory => activityMemory.id === activityMemoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
}

    renderEditForms() {
        return this.filteredUserActivityMemories().map(activityMemory => {
            return (<Grid.Row key={activityMemory.id} columns={6}>
              <Grid.Column>
              <Input focus value={this.state.editedActivityMemories[activityMemory.id] && this.state.editedActivityMemories[activityMemory.id].createdAt ? this.state.editedActivityMemories[activityMemory.id].createdAt : activityMemory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, activityMemory.id)}/>
              </Grid.Column>
              {/* Edit emotions and Activitys in their own sections */}
              <Grid.Column>
              <Input focus value={this.state.editedActivityMemories[activityMemory.id] && this.state.editedActivityMemories[activityMemory.id].activityName ? this.state.editedActivityMemories[activityMemory.id].activityName : activityMemory.activityName}  name='activityName' onChange={event => this.handleMultiEditChange(event, activityMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedActivityMemories[activityMemory.id] && this.state.editedActivityMemories[activityMemory.id].activityDescription ? this.state.editedActivityMemories[activityMemory.id].activityDescription : activityMemory.activityDescription}  name='activityDescription' onChange={event => this.handleMultiEditChange(event, activityMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedActivityMemories[activityMemory.id] && this.state.editedActivityMemories[activityMemory.id].activityStartTime ? this.state.editedActivityMemories[activityMemory.id].activityStartTime : activityMemory.activityStartTime}  name='activityStartTime' onChange={event => this.handleMultiEditChange(event, activityMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedActivityMemories[activityMemory.id] && this.state.editedActivityMemories[activityMemory.id].activityEndTime ? this.state.editedActivityMemories[activityMemory.id].activityEndTime : activityMemory.activityEndTime}  name='activityEndTime' onChange={event => this.handleMultiEditChange(event, activityMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Button onClick={() => this.destroyActivityMemory(activityMemory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }

    destroyActivityMemory(ActivityMemoryId) {
      this.props.destroyActivityMemory(ActivityMemoryId)
      this.props.getAllUserMemories()
    } 


    renderEditButton = () => {
        return <Button color='teal' size='small' value='editActivityMemories' name='editActivityMemories' onClick={event => this.onEditButtonClick(event)}>
        Edit
      </Button>
    }

    handleSubmitEdit = (event) => {
        // Need to go thorugh state and hit update_memory for each memory that was changed
        console.log("activity props before submitstate", this.props.memories)
        const editedActivityMemoryArray = Object.keys(this.state.editedActivityMemories)
        editedActivityMemoryArray.forEach(editedActivityMemoryId => this.props.updateActivityMemory(editedActivityMemoryId, this.state.editedActivityMemories[editedActivityMemoryId]))
        console.log('about to get user mems from edit submit')
        this.onEditButtonClick(event)
    }

    renderSubmitEditButton = () => {
        return <Button color='teal' size='small' value='editActivityMemories' name='editActivityMemories' onClick={event => this.handleSubmitEdit(event)}>
        Submit
      </Button>
    }

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <ActivityMemoriesHeader editActivityMemories={this.props.editActivityMemories} renderEditButton={() => this.renderEditButton()} renderSubmitEditButton={() => this.renderSubmitEditButton()}/>
    {this.props.editActivityMemories ? this.renderEditForms() : this.renderActivityMemories()}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            activitySelection: state.activitySelection,
            ActivityFormSelection: state.activitySelection,
            editActivityMemories: state.editActivityMemories,
            updating: state.updating
        };
    };
     

export default connect(mapStateToProps, actions)(ActivityMemoryContainer);