import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import AvgEmotionData from '../ChartComponents/AvgEmotionData'
import EmotionMemoryList from '../ListComponents/EmotionMemoryList'
import EmotionMemoriesHeader from '../HeaderComponents/EmotionMemoriesHeader'
import EmotionSelector from '../Components/EmotionSelector'
import * as actions from '../actions'

class EmotionMemories extends React.Component {


    componentDidUpdate() {
        if (this.props.updating === true) {
            console.log('should get all use mems next')
        this.props.getAllUserMemories()
        // return this.render()
        }
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderEmotionMemories() {
        console.log("props for rendering emotion memory list is is", this.props.memories)
        const userEmotionMemories = []
        this.props.memories.forEach(memory => memory.emotionMemories.forEach(emotionMemory => userEmotionMemories.push(emotionMemory)))
        const sortedEmotionMemories = [...userEmotionMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedEmotionMemories.map(emotionMemory => {
            return <EmotionMemoryList key={"em" + emotionMemory.id} emotionMemory={emotionMemory}/>
        })
    }

state = {
    editedEmotionMemories: {}
}


emotionMemories = () => {
    let emotionMemories = []
    this.props.memories.forEach(memory => memory.emotionMemories.forEach(emotionMemory => emotionMemories.push(emotionMemory)))
    return emotionMemories
}

handleMultiEditChange = (event, emotionMemoryId) => {
    event.persist()
    this.state.editedEmotionMemories[emotionMemoryId] ? this.setState((prevState) => ({editedEmotionMemories: {...prevState.editedEmotionMemories, [emotionMemoryId]: {...prevState.editedEmotionMemories[emotionMemoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second Emotion memories!', this.state)) : this.setState((prevState) => ({editedEmotionMemories: {...prevState.editedEmotionMemories, [emotionMemoryId]: {...this.emotionMemories().find(emotionMemory => emotionMemory.id === emotionMemoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
}

handleMultiEditSelectChange = (event, emotionMemoryId) => {
    event.persist()
    this.state.editedEmotionMemories[emotionMemoryId] ? this.setState((prevState) => ({editedEmotionMemories: {...prevState.editedEmotionMemories, [emotionMemoryId]:  {...prevState.editedEmotionMemories[emotionMemoryId], emotionId: this.props.emotions.find(emotion => emotion.emotion === event.target.innerText).id}}}), () => console.log('editing second Emotion memories!', this.state)) : this.setState((prevState) => ({editedEmotionMemories: {...prevState.editedEmotionMemories, [emotionMemoryId]:  {...this.emotionMemories().find(emotionMemory => emotionMemory.id === emotionMemoryId), emotionId: this.props.emotions.find(emotion => emotion.emotion === event.target.innerText).id}}}), () => console.log('editing first memories target!', this.state, event.target))
}


    renderEditForms() {
        console.log('rendering edit forms!')
        const userEmotionMemories = []
        this.props.memories.forEach(memory => memory.emotionMemories.forEach(emotionMemory => userEmotionMemories.push(emotionMemory)))
        const sortedEmotionMemories = [...userEmotionMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedEmotionMemories.map(emotionMemory => {
            return (<Grid.Row key={emotionMemory.id} columns={7}>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].createdAt ? this.state.editedEmotionMemories[emotionMemory.id].createdAt : emotionMemory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <EmotionSelector onChange={this.handleSelect} emotions={this.props.emotions} fluid label='Emotion' placeholder='Emotion' name="emotion" value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].emotion ? this.state.editedEmotionMemories[emotionMemory.id].emotion : emotionMemory.emotion}  name='emotion' onChange={event => this.handleMultiEditSelectChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].pleasure ? this.state.editedEmotionMemories[emotionMemory.id].pleasure : emotionMemory.pleasure}  name='pleasure' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].intensity ? this.state.editedEmotionMemories[emotionMemory.id].intensity : emotionMemory.intensity}  name='intensity' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].stressLevel ? this.state.editedEmotionMemories[emotionMemory.id].stressLevel : emotionMemory.stressLevel}  name='stressLevel' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].anxietyLevel ? this.state.editedEmotionMemories[emotionMemory.id].anxietyLevel : emotionMemory.anxietyLevel}  name='anxietyLevel' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Button onClick={() => this.destroyEmotionMemory(emotionMemory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }
    destroyEmotionMemory(emotionMemoryId) {
        this.props.destroyEmotionMemory(emotionMemoryId)
        this.props.getAllUserMemories()
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderEditButton() {
        return <Button color='teal' size='small' value='editEmotionMemories' name='editEmotionMemories' onClick={event => this.onEditButtonClick(event)}>
        Edit
      </Button>
    }

    handleSubmitEdit = (event) => {
        // Need to go thorugh state and hit update_memory for each memory that was changed
        console.log("state", this.state)
        const editedEmotionMemoryArray = Object.keys(this.state.editedEmotionMemories)
        console.log('step one done')
        editedEmotionMemoryArray.forEach(editedEmotionMemoryId => this.props.updateEmotionMemory(editedEmotionMemoryId, this.state.editedEmotionMemories[editedEmotionMemoryId]))
        console.log('step two done')
        this.props.getAllUserMemories()
        console.log('step three done')
        this.onEditButtonClick(event)
        console.log('step four done')
    }

    renderSubmitEditButton() {
        return <Button color='teal' size='small' value='editEmotionMemories' name='editEmotionMemories' onClick={event => this.handleSubmitEdit(event)}>
        Submit
      </Button>
    }

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row centered>
      <AvgEmotionData />
    </Grid.Row>
    <EmotionMemoriesHeader editEmotionMemories={this.props.editEmotionMemories} renderEditButton={() => this.renderEditButton()} renderSubmitEditButton={() => this.renderSubmitEditButton()}/>
    {this.props.editEmotionMemories ? this.renderEditForms() : this.renderEmotionMemories()}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            memories: state.memories,
            emotions: state.emotions,
            editEmotionMemories: state.editEmotionMemories,
            updating: state.updating
        };
    };
     

export default connect(mapStateToProps, actions)(EmotionMemories);