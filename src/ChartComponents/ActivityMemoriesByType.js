
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class ActivityMemoriesByType extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.renderChart()
    }
    componentDidUpdate() {
        this.renderChart()
    }

        renderChart() {
            const myChartRef = this.chartRef.current.getContext("2d");
            // map data for chart to arrays
            const memoryData = this.props.memories
            const activityMemoriesData = []
            memoryData.forEach(memory => {
                return memory.activityMemories[0] ? activityMemoriesData.push(memory.activityMemories[0]) : null
            })
            const activityTypeData = activityMemoriesData.map(activityMemory => activityMemory.activityType)
            // One array of distinct types
            const distinctActivityTypes = [...new Set(activityTypeData.filter(type => type != null))]
            // emotions
            const emotionMemoriesData = []
            memoryData.forEach(memory => {
                return memory.emotionMemories[0] ? emotionMemoriesData.push(memory.emotionMemories[0]) : null
            })
            const emotionTypeData = emotionMemoriesData.map(emotionMemory => emotionMemory.emotion)
            // One array of distinct types
            const totalActivityMemories = [...activityTypeData].filter(activityType => activityType != null).length;

            let activityCountByType = []
            distinctActivityTypes.forEach(activityType => {
                let counter = 0
                activityTypeData.forEach(activityMemoryactivityType => {
                    if (activityMemoryactivityType === activityType) {
                        ++counter
                    }
                })
                activityCountByType.push(counter)
            })

            // One array of count by type
            // map data for chart axes and overlays


            const chartData = {
                labels: distinctActivityTypes,
                datasets: [
                    {
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                        data: activityCountByType
                    }
                ]
        }

        const options = {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                }
            },
            title: {
                display: true,
                text: 'Total Thought Count by Type'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 10,
                        min: 0,
                        stepSize: 1
                    }
                }]
            },
            animation: {
                easing: "easeInOutBack"
              }
            }
        
        const myChart = new Chart(myChartRef, {
            type: 'doughnut',
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
        // this.renderChart()
        return (
            <div style={{width: '33%'}}>
                <canvas
                    id="myChart"
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

export default connect(mapStateToProps, actions)(ActivityMemoriesByType)