
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class GratitudeSelector extends React.Component {

    render() {
        return (
            <Button circular color='green' size='massive' basic icon="gem outline" value='gratitude' 
            onClick={() => this.props.updateThoughtSelection({target: {value: 'gratitude'}})}/>   )
    }
}

export default connect(null, actions)(GratitudeSelector)