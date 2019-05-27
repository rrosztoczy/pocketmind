
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class SocialSelector extends React.Component {

    render() {
        return (
            <Button circular color='green' size='massive' basic icon="users" value='social' 
            onClick={() => this.props.updateActivitySelection({target: {value: 'social'}})}/>)
    }
}

export default connect(null, actions)(SocialSelector)