
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class EntertainmentSelector extends React.Component {

    render() {
        return (
            <Button circular color='blue' size='massive' basic icon="bar"  value='entertainment' 
            onClick={() => this.props.updateActivitySelection({target: {value: 'entertainment'}})}/>)
    }
}

export default connect(null, actions)(EntertainmentSelector)