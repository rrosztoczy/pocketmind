
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class BalanceSelector extends React.Component {

    render() {
        return (
            <Button circular color='blue' size='massive' basic icon="law"  value='balance' 
            onClick={() => this.props.updateThoughtSelection({target: {value: 'balance'}})}/>  )
    }
}

export default connect(null, actions)(BalanceSelector)