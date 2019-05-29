
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class MoodEnergyTimelineChart extends Component {
    // chartRef = React.createRef();

    // componentDidMount() {
    //     this.renderChart()
    // }
    componentDidUpdate() {
        this.renderChart()
    }

        renderChart = () => {
            const myChartRef = this.refs.chartRef.getContext("2d");
            // map data for chart to arrays
            const memoryData = this.props.memories
            const emotionMemoriesData = []
            const thoughtMemoriesData = []
            const activityMemoriesData = []
            memoryData.forEach(memory => {
                return memory.emotionMemories[0] ? emotionMemoriesData.push(memory.emotionMemories[0]) : null
            })
            memoryData.forEach(memory => {
                return memory.thoughtMemories[0] ? thoughtMemoriesData.push(memory.thoughtMemories[0]) : null
            })
            memoryData.forEach(memory => {
                return memory.activityMemories[0] ? activityMemoriesData.push(memory.activityMemories[0]) : null
            })
            console.log(emotionMemoriesData)
            // const thoughtMemoriesData = memoryData.map(memory => memory.thoughtMemories[0])
            const emotions = emotionMemoriesData.map(emotionMemory => emotionMemory.emotion)
            const thoughts = thoughtMemoriesData.map(thoughtMemory => thoughtMemory.topic)
            const activities = activityMemoriesData.map(activityMemory => activityMemory.activityName)
            const moodLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.pleasure)
            const energyLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.intensity)
            // map data for chart axes and overlays
            const emotionMemoryDates = emotionMemoriesData.map(emotionMemory => emotionMemory.createdAt)
            const thoughtMemoryDates = thoughtMemoriesData.map(thoughtMemory => thoughtMemory.createdAt)
            // Create x/y points for a time axis by creating array of hash with x: new Date(date) and y: the appropriate data set
            const relatedMemoryIds = emotionMemoriesData.map(emotionMemory => emotionMemory.memoryId)
            console.log('emotion memorys', emotionMemoriesData)
            console.log('memory ids', relatedMemoryIds)
            const emotionChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: emotions[i]}))
            const moodChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: moodLevel[i]}))
            const energyChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: energyLevel[i]}))
            console.log('rendering emotion data', emotions)
            console.log('rendering thought data', thoughts)
            console.log('rendering activity data', activities)
            // console.log('rendering anxiety chart', anxietyChartData)
            // console.log('rendering emotions chart', emotionChartData)
            const chartData = {
                // labels: formattedDateTime,
                datasets: [
                    {
                        label: "Mood",
                        borderColor: "#8e5ea2",
                        backgroundColor: "#8e5ea2",
                        pointBorderColor: "#8e5ea2",
                        pointBackgroundColor: "#8e5ea2",
                        pointHoverBackgroundColor: "#8e5ea2",
                        pointHoverBorderColor: "#8e5ea2",
                        fill: false,
                        data: moodChartData
                    },
                    {
                        label: "Energy",
                        borderColor: "#80b6f4",
                        backgroundColor: "#80b6f4",
                        pointBorderColor: "#80b6f4",
                        pointBackgroundColor: "#80b6f4",
                        pointHoverBackgroundColor: "#80b6f4",
                        pointHoverBorderColor: "#80b6f4",
                        fill: false,
                        data: energyChartData
                    }
                ]
        }

        const options = {
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        let emotionsLabel = ["\nEmotion: " + emotions[tooltipItem.index]]
                        let thoughtsLabel = ["\nThought: " + thoughts[tooltipItem.index]]
                        let activitiesLabel = ["\nActivity: " + activities[tooltipItem.index]]
                        emotionsLabel.push(thoughtsLabel)
                        emotionsLabel.push(activitiesLabel)
                        return emotionsLabel
                    }
                },
                hover: {
                mode: 'nearest',
                intersect: true
                }},
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                }
            },
            scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unit: 'hour',
                        unitStepSize: 6.0,
                        round: 'minute',
                        tooltipFormat: "h:mm:ss a",
                        displayFormats: {
                        hour: 'MMM D, h:mm A'
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 10,
                        min: 0,
                        stepSize: 1
                    },
                    gridLines: {
                        color: "black",
                        borderDash: [2, 5],
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Level"
                    }
                }]
            },
            animation: {
                easing: "easeInOutBack"
              }
            }
        
        const myChart = new Chart(myChartRef, {
            type: 'scatter',
            data: chartData,
            options: options
        })
    }
            // map data for labels

            // **************************************Optimization****************************************************************
            // TODO: I want to display multiple data points for emotions if they exist and build the line off of the average at that point 
            // TODO: I want to display multiple data points for thoughts if they exist
            // TODO: I want to display multiple data points for activities if they exist
            // *******************************************************************************************************************
    render() {
        window.addEventListener("resize", this.renderChart)
        // this.renderChart()
        return (
            <div style={{width: '45%'}}>
                <canvas
                    id="myChart"
                    ref='chartRef'
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

export default connect(mapStateToProps, actions)(MoodEnergyTimelineChart)