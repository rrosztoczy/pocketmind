
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class WorkSelector extends React.Component {

    render() {
        return (
           <Button circular color='brown' size='massive' basic icon="coffee" value='work' 
            onClick={() => this.props.updateActivitySelection({target: {value: 'work'}})}/>)
    }
}

export default connect(null, actions)(WorkSelector)