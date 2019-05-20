import React from 'react'
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import * as actions from '../actions'


class EmotionSelector extends React.Component {

componentDidMount() {
    this.props.getAllEmotions()
}
    
render() {
    const emotionOptions = this.props.emotions.map((emotion) => ({key: emotion.emotion, value: emotion.emotion, flag: emotion.emotion, text: emotion.emotion}))
    return (
        <Dropdown
        placeholder='How are you feeling?'
        fluid
        search
        selection
        options={emotionOptions}
      />
    )
}

}
  const mapStateToProps = state => {
    return {
        emotions: state.emotions
    }
}
  
  export default connect(mapStateToProps, actions)(EmotionSelector)