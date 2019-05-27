
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class PhysicalSelector extends React.Component {

    render() {
        return (
            <Button circular color='yellow' size='massive' basic icon="heartbeat" value='physical'  
            onClick={() => this.props.updateActivitySelection({target: {value: 'physical'}})}/>)
    }
}

export default connect(null, actions)(PhysicalSelector)