
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class MemoryTimelineChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
            // console.log(chartRef)
            const myChartRef = this.chartRef.current.getContext("2d");
            // map data for chart to arrays
            const memoryData = this.props.memories
            const emotionMemoriesData = memoryData.map(memory => memory.emotionMemories[0])
            const thoughtMemoriesData = memoryData.map(memory => memory.thoughtMemories[0])
            const emotions = emotionMemoriesData.map(emotionMemory => emotionMemory.emotion)
            const moodLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.pleasure)
            const energyLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.intensity)
            const stressLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.stressLevel)
            const anxietyLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.anxietyLevel)
            // map data for chart axes and overlays
            const emotionMemoryDates = emotionMemoriesData.map(emotionMemory => emotionMemory.createdAt)
            const thoughtMemoryDates = thoughtMemoriesData.map(thoughtMemory => thoughtMemory.createdAt)
            // Create x/y points for a time axis by creating array of hash with x: new Date(date) and y: the appropriate data set
            const moodChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: moodLevel[i]}))
            console.log('rendering chart', moodChartData)
    }
    componentDidUpdate() {
        const myChartRef = this.chartRef.current.getContext("2d");
        // map data for chart to arrays
        const memoryData = this.props.memories
        const emotionMemoriesData = []
        const thoughtMemoriesData = []
        memoryData.forEach(memory => {
            return memory.emotionMemories[0] ? emotionMemoriesData.push(memory.emotionMemories[0]) : null
        })
        memoryData.forEach(memory => {
            return memory.thoughtMemories[0] ? thoughtMemoriesData.push(memory.thoughtMemories[0]) : null
        })
        console.log(emotionMemoriesData)
        // const thoughtMemoriesData = memoryData.map(memory => memory.thoughtMemories[0])
        const emotions = emotionMemoriesData.map(emotionMemory => emotionMemory.emotion)
        const moodLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.pleasure)
        const energyLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.intensity)
        const stressLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.stressLevel)
        const anxietyLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.anxietyLevel)
        // map data for chart axes and overlays
        const emotionMemoryDates = emotionMemoriesData.map(emotionMemory => emotionMemory.createdAt)
        const thoughtMemoryDates = thoughtMemoriesData.map(thoughtMemory => thoughtMemory.createdAt)
        // Create x/y points for a time axis by creating array of hash with x: new Date(date) and y: the appropriate data set
        const emotionChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: emotions[i]}))
        const moodChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: moodLevel[i]}))
        const energyChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: energyLevel[i]}))
        const stressChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: stressLevel[i]}))
        const anxietyChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: anxietyLevel[i]}))
        // console.log('rendering mood chart', moodChartData)
        // console.log('rendering energy chart', energyChartData)
        // console.log('rendering stress chart', stressChartData)
        // console.log('rendering anxiety chart', anxietyChartData)
        // console.log('rendering emotions chart', emotionChartData)
    }

        renderChart() {

        }
            // map data for labels

            // **************************************Optimization****************************************************************
            // TODO: I want to display multiple data points for emotions if they exist and build the line off of the average at that point 
            // TODO: I want to display multiple data points for thoughts if they exist
            // TODO: I want to display multiple data points for activities if they exist
            // *******************************************************************************************************************
    render() {
        this.renderChart()
        return (
            <div>
                <canvas
                    id="myBarChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        memories: state.memories
    }
}

export default connect(mapStateToProps, actions)(MemoryTimelineChart)