import React from 'react'
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import * as actions from '../actions'


class EmotionSelector extends React.Component {

render() {
    const emotionOptions = this.props.emotions.map((emotion) => ({key: `em${emotion.id}`, value: emotion.id, text: emotion.emotion}))
    return (
        <Dropdown
        onChange={this.props.onChange}
        placeholder='How are you feeling?'
        fluid
        search
        selection
        options={emotionOptions}
      />
    )
}

}

  
  export default connect(null, actions)(EmotionSelector)