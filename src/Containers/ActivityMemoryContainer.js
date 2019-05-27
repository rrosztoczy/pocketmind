import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'

class ActivityMemoryContainer extends React.Component {


    state = {
        editedActivityMemories: {}
    }
    componentDidMount() {
      this.props.getAllUserMemories()
    }


    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderActivityMemoryHeaders() {
        return (<Grid.Row columns={6}>
            <Grid.Column>
            <p>Time</p>
            </Grid.Column>
            <Grid.Column>
            <p>Name</p>
            </Grid.Column>
            <Grid.Column>
            <p>Description</p>
            </Grid.Column>
            <Grid.Column>
            <p>Start</p>
            </Grid.Column>
            <Grid.Column>
            <p>End</p>
            </Grid.Column>
            <Grid.Column>
            {this.props.editActivityMemories ? this.renderSubmitEditButton() : this.renderEditButton()}
            </Grid.Column>
          </Grid.Row>)
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
        return this.filteredUserActivityMemories().map(activityMemory => {
            return (<Grid.Row columns={6} key={activityMemory.id} >
              <Grid.Column>
              <p>{activityMemory.createdAt}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{activityMemory.activityName}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{activityMemory.activityDescription}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{activityMemory.activityStartTime}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{activityMemory.activityEndTime}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{activityMemory.memoryId}</p>
              </Grid.Column>
            </Grid.Row>)
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


    renderEditButton() {
        return <Button color='teal' size='large' value='editActivityMemories' name='editActivityMemories' onClick={event => this.onEditButtonClick(event)}>
        Edit
      </Button>
    }

    handleSubmitEdit = (event) => {
        // Need to go thorugh state and hit update_memory for each memory that was changed
        console.log("state", this.state)
        const editedActivityMemoryArray = Object.keys(this.state.editedActivityMemories)
        editedActivityMemoryArray.forEach(editedActivityMemoryId => this.props.updateActivityMemory(editedActivityMemoryId, this.state.editedActivityMemories[editedActivityMemoryId]))
        this.props.getAllUserMemories()
        this.onEditButtonClick(event)
    }

    renderSubmitEditButton() {
        return <Button color='teal' size='large' value='editActivityMemories' name='editActivityMemories' onClick={event => this.handleSubmitEdit(event)}>
        Submit
      </Button>
    }

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    {this.renderActivityMemoryHeaders()}
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
            editActivityMemories: state.editActivityMemories
        };
    };
     

export default connect(mapStateToProps, actions)(ActivityMemoryContainer);