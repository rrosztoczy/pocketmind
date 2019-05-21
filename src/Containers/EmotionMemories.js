import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import * as actions from '../actions'

class EmotionMemories extends React.Component {

    componentDidMount() {
        this.props.getAllEmotionMemories()
    }

    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderEmotionMemoryHeaders() {
        return (<Grid.Row columns={5}>
            <Grid.Column>
            <p>Go to Memory</p>
            </Grid.Column>
            <Grid.Column>
            <p>Time</p>
            </Grid.Column>
            <Grid.Column>
            <p>Emotion</p>
            </Grid.Column>
            <Grid.Column>
            <p>Pleasure</p>
            </Grid.Column>
            <Grid.Column>
            <p>Intensity</p>
            </Grid.Column>
          </Grid.Row>)
    }

    renderEmotionMemories() {
        const sortedEmotionMemories = [...this.props.emotionMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedEmotionMemories.map(emotionMemory => {
            return (<Grid.Row key={emotionMemory.id} columns={5}>
              <Grid.Column>
              <p>{emotionMemory.memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{emotionMemory.created_at}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{emotionMemory.emotion.emotion}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{emotionMemory.pleasure}</p>
              </Grid.Column>
              <Grid.Column>
              <p>{emotionMemory.intensity}</p>
              </Grid.Column>
            </Grid.Row>)
        })
    }

state = {
    editedEmotionMemories: {}
}

handleMultiEditChange = (event, emotionMemoryId) => {
    event.persist()
    this.state.editedEmotionMemories[emotionMemoryId] ? this.setState((prevState) => ({editedEmotionMemories: {...prevState.editedEmotionMemories, [emotionMemoryId]: {...prevState.editedEmotionMemories[emotionMemoryId], [event.target.name]: event.target.value}}}), () => console.log('editing second Emotion memories!', this.state)) : this.setState((prevState) => ({editedEmotionMemories: {...prevState.editedEmotionMemories, [emotionMemoryId]: {...this.props.emotionMemories.find(emotionMemory => emotionMemory.id === emotionMemoryId), [event.target.name]: event.target.value}}}), () => console.log('editing first memories!', this.state))
}

    renderEditForms() {
        console.log('rendering edit forms!')
        const sortedEmotionMemories = [...this.props.emotionMemories].sort(function(a,b) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        return sortedEmotionMemories.map(emotionMemory => {
            return (<Grid.Row key={emotionMemory.id} columns={5}>
              <Grid.Column>
              <p>{emotionMemory.memory.id}</p>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].createdAt ? this.state.editedEmotionMemories[emotionMemory.id].createdAt : emotionMemory.createdAt} name='createdAt' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              {/* Edit emotions and Emotions in their own sections */}
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].emotion.emotion ? this.state.editedEmotionMemories[emotionMemory.id].emotion.emotion : emotionMemory.emotion.emotion}  name='emotion' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].pleasure ? this.state.editedEmotionMemories[emotionMemory.id].pleasure : emotionMemory.pleasure}  name='pleasure' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              </Grid.Column>
              <Grid.Column>
              <Input focus value={this.state.editedEmotionMemories[emotionMemory.id] && this.state.editedEmotionMemories[emotionMemory.id].intensity ? this.state.editedEmotionMemories[emotionMemory.id].intensity : emotionMemory.intensity}  name='intensity' onChange={event => this.handleMultiEditChange(event, emotionMemory.id)}/>
              <Button onClick={() => this.props.destroyEmotionMemory(emotionMemory.id)} icon='trash alternate outline'/>
              </Grid.Column>
            </Grid.Row>)
        })

    }
    onEditButtonClick = (event) => {
        event.persist()
        this.props.toggleForm(event)
    }

    renderEditButton() {
        return <Button color='teal' fluid size='large' value='editEmotionMemories' name='editEmotionMemories' onClick={event => this.onEditButtonClick(event)}>
        EDIT EMOTION MEMORY DATA
      </Button>
    }

    handleSubmitEdit = (event) => {
        // Need to go thorugh state and hit update_memory for each memory that was changed
        console.log("state", this.state)
        const editedEmotionMemoryArray = Object.keys(this.state.editedEmotionMemories)
        editedEmotionMemoryArray.forEach(editedEmotionMemoryId => this.props.updateEmotionMemory(editedEmotionMemoryId, this.state.editedEmotionMemories[editedEmotionMemoryId]))
        this.onEditButtonClick(event)
    }

    renderSubmitEditButton() {
        return <Button color='teal' fluid size='large' value='editEmotionMemories' name='editEmotionMemories' onClick={event => this.handleSubmitEdit(event)}>
        SUBMIT EDITS
      </Button>
    }

    render() {
        console.log("props", this.props)
        return(
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      <Header as='h1' color='blue' textAlign='center'>
          YOU ARE IN YOUR EMOTION MEMORIES
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
            {this.props.editEmotionMemories ? this.renderSubmitEditButton() : this.renderEditButton()}
            <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              GO TO MEMORIES
            </Button>
            <Button color='teal' fluid size='large' value='new' name='new' onClick={event => this.onFormButtonClick(event)}>
              GO TO EMOTIONS
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Emotion Memories
            </Header>
      </Grid.Column>
    </Grid.Row>
    {this.renderEmotionMemoryHeaders()}
    {this.props.editEmotionMemories ? this.renderEditForms() : this.renderEmotionMemories()}
  </Grid>
  )
}
}

    const mapStateToProps = state => {
        return {
            emotionMemories: state.emotionMemories,
            editEmotionMemories: state.editEmotionMemories
        };
    };
     

export default connect(mapStateToProps, actions)(EmotionMemories);