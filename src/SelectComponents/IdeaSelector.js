
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class IdeaSelector extends React.Component {

    render() {
        return (
            <Button circular color='yellow' size='massive' basic icon="lightbulb outline" value='idea'  
            onClick={() => this.props.updateThoughtSelection({target: {value: 'idea'}})}/>  )
    }
}

export default connect(null, actions)(IdeaSelector)