import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Input } from 'semantic-ui-react'
import * as actions from '../actions'
import MemoriesByType from '../ChartComponents/MemoriesByType';
import MemoriesList from '../ListComponents/MemoryList'
import MemoriesEdit from '../EditComponents/MemoriesEdit'
import MemoriesHeader from '../HeaderComponents/MemoriesHeader'

class Memories extends React.Component {

    state = {
        editedMemories: {}
    }

    onFormButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    handleMultiEditChange = (event, memoryId) => {
        event.persist()
        this.state.editedMemories[memoryId] 
        ? this.setState((prevState) => ({editedMemories: {...prevState.editedMemories, 
        [memoryId]: {...prevState.editedMemories[memoryId], [event.target.name]: event.target.value}}})) 
        : this.setState((prevState) => ({editedMemories: {...prevState.editedMemories, 
        [memoryId]: {...this.props.memories.find(memory => memory.id === memoryId), 
        [event.target.name]: event.target.value}}}))
    }

    sortMemories() {
        const sortedMemories = [...this.props.memories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedMemories
    }

    renderMemories() {
        return this.sortMemories().map(memory => {
            return <MemoriesList memory={memory}/>
        })

    }

    renderEditForms() {
        return this.sortMemories().map(memory => {
            return <MemoriesEdit memory={memory} editedMemories={this.state.editedMemories} destroyMemory={(memoryId) => {this.props.destroyMemory(memoryId)}} handleMultiEditChange={(event, memoryId) => {this.handleMultiEditChange(event, memoryId)}}/>
        })

    }
    renderEditButton() {
        return <Button color='teal' size='small' value='edit' name='edit' onClick={event => this.onEditButtonClick(event)}>Edit</Button>
    }

    handleSubmitEdit = (event) => {
        const editedMemoryArray = Object.keys(this.state.editedMemories)
        editedMemoryArray.forEach(editedMemoryId => this.props.updateMemory(editedMemoryId, this.state.editedMemories[editedMemoryId]))
        this.onEditButtonClick(event)
    }

    renderSubmitEditButton() {
        return <Button color='teal' size='small' value='edit' name='edit' onClick={event => this.handleSubmitEdit(event)}>Submit</Button>
    }

    render() {
        return (
            <Grid divided='vertically'>
                <Grid.Row centered>
                    <MemoriesByType/>
                </Grid.Row>
                 <MemoriesHeader edit={this.props.edit} renderEditButton={() => this.renderEditButton()} renderSubmitEditButton={() => this.renderSubmitEditButton()}/>
                 {this.props.edit ? this.renderEditForms() : this.renderMemories()}
            </Grid>
         )
    }
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            edit: state.edit,
            emotions: state.emotions
        }
    }
     
export default connect(mapStateToProps, actions)(Memories);