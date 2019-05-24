
import React, { Component } from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import MemoryTimelineChart from '../Components/MemoryTimelineChart'

class MemoryTimeline extends Component {
    componentDidMount() {
    this.props.getAllUserMemories()
}
    render() {
        return <MemoryTimelineChart/>
    }
}

export default connect(null, actions)(MemoryTimeline)