
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class MemoriesByType extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.renderChart()
    }
    componentDidUpdate() {
        this.renderChart()
    }

        renderChart() {
            console.log('rendering chart')
            const myChartRef = this.chartRef.current.getContext("2d");
            // map data for chart to arrays
            const memoryData = this.props.memories
            const thoughtMemoriesData = []
            memoryData.forEach(memory => {
                return memory.thoughtMemories[0] ? thoughtMemoriesData.push(memory.thoughtMemories[0]) : null
            })
            const thoughtTypeData = thoughtMemoriesData.map(thoughtMemory => thoughtMemory.thoughtType)
            // One array of distinct types
            const distinctThoughtTypes = [...new Set(thoughtTypeData.filter(type => type != null))]
            // emotions
            const emotionMemoriesData = []
            memoryData.forEach(memory => {
                return memory.emotionMemories[0] ? emotionMemoriesData.push(memory.emotionMemories[0]) : null
            })
            const emotionTypeData = emotionMemoriesData.map(emotionMemory => emotionMemory.emotion)
            // One array of distinct types
            const totalEmotionMemories = [...emotionTypeData].filter(emotion => emotion != null).length;
            const totalThoughtMemories = [...thoughtTypeData].filter(thoughtType => thoughtType != null).length;
            const totalActivityMemories = 3

            // One array of count by type
            // map data for chart axes and overlays


            const chartData = {
                labels: distinctThoughtTypes,
                datasets: [
                    {
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                        data: [totalEmotionMemories, totalThoughtMemories, totalActivityMemories]
                    }
                ],
                labels: [
                    'Emotions',
                    'Thoughts',
                    'Activity'
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
                text: 'Memories by Type'
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
   
        console.log('rendering')
        return (
            <div style={{width: '66%'}}>
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

export default connect(mapStateToProps, actions)(MemoriesByType)