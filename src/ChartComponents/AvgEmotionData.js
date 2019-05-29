
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class AvgEmotionData extends Component {
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
            const emotionMemoriesData = []
            memoryData.forEach(memory => {
                return memory.emotionMemories[0] ? emotionMemoriesData.push(memory.emotionMemories[0]) : null
            })
            const moodLevelData = emotionMemoriesData.map(emotionMemory => emotionMemory.pleasure)
            const energyLevelData = emotionMemoriesData.map(emotionMemory => emotionMemory.intensity)
            const stressLevelData = emotionMemoriesData.map(emotionMemory => emotionMemory.stressLevel)
            const anxietyLevelData = emotionMemoriesData.map(emotionMemory => emotionMemory.anxietyLevel)

            const sumArray = (sum, currentValue) => sum + currentValue;

            const moodLevelAvg = moodLevelData.reduce(sumArray)/moodLevelData.length
            const energyLevelAvg = energyLevelData.reduce(sumArray)/energyLevelData.length
            const stressLevelAvg = stressLevelData.reduce(sumArray)/stressLevelData.length
            const anxietyLevelAvg = anxietyLevelData.reduce(sumArray)/anxietyLevelData.length

       
            // One array of count by type
            // map data for chart axes and overlays


            const chartData = {
                labels: ['Mood', 'Energy', 'Stress', 'Anxiety'],
                datasets: [
                    {
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                        data: [moodLevelAvg, energyLevelAvg, stressLevelAvg, anxietyLevelAvg]
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
                text: 'Averages'
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
            type: 'bar',
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

export default connect(mapStateToProps, actions)(AvgEmotionData)