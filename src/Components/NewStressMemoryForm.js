
import React from 'react'
import { Grid, Button, Header, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FeelingOptionsSegment from '../Components/FeelingOptionsSegment'
import EmotionSelector from '../Components/EmotionSelector'
import * as actions from '../actions'

class NewEmotionMemoryForm extends React.Component {

    state = {
        emotionId: "",
        intensity: 5,
        pleasure: 5,
        stressLevel: 5,
        anxietyLevel: 5
    }

    handleChange = (event) => { 
        this.setState({[event.target.name]: event.target.value}, () => console.log("Form State", this.state, "event value", event.target))
    }
    
    handleSelect = (event) => {
        event.persist();
        this.setState({emotionId: this.props.emotions.find(emotion => emotion.emotion === event.target.innerText).id}, () => console.log('event', event.target))
    }

  handleSubmitEmotion = (event) => {
    this.props.addEmotionMemory(this.state)
    this.props.toggleForm({target: {value: 'emotionOptions'}})
}


    render() {
        return (
<>