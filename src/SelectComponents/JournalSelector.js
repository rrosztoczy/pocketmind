
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class JournalSelector extends React.Component {

    render() {
        return (
            <Button circular color='brown' size='massive' basic icon="book" value='journal' 
            onClick={() => this.props.updateThoughtSelection({target: {value: 'journal'}})}/>   )
    }
}

export default connect(null, actions)(JournalSelector)