
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class ByDayStressAnxiety extends Component {
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
            const emotionMemoriesData = []
            memoryData.forEach(memory => {
                return memory.emotionMemories[0] ? emotionMemoriesData.push(memory.emotionMemories[0]) : null
            })
            console.log(emotionMemoriesData)
            // const thoughtMemoriesData = memoryData.map(memory => memory.thoughtMemories[0])
            const stressLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.stressLevel)
            const anxietyLevel = emotionMemoriesData.map(emotionMemory => emotionMemory.anxietyLevel)
            // map data for chart axes and overlays
            const emotionMemoryDates = emotionMemoriesData.map(emotionMemory => emotionMemory.createdAt)
            const dateData = emotionMemoryDates.map((emotionMemoryDate) => (new Date(emotionMemoryDate).getDay()))
            const distinctDateData = [...new Set(dateData)].reverse()
            const stressChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate).getDay(), y: stressLevel[i]}))
            const anxietyChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate).getDay(), y: anxietyLevel[i]}))
            // Starting from distinct data data, for each key iterate through stressChartData. For each exmaple with a key of x equal to the distinct key, 
            // add them and divide by the number of examples. Do the same for anxiety
            const avgStressData = []
            const avgAnxietyData = []
            distinctDateData.forEach(date => {
                let sum = 0
                let counter = 0
                stressChartData.forEach(stressDataPoint => {
                if (stressDataPoint.x === date) {
                    sum = sum + stressDataPoint.y;
                    ++counter;
                }
              })
              avgStressData.push(sum/counter)
            })
            distinctDateData.forEach(date => {
                let sum = 0
                let counter = 0
                anxietyChartData.forEach(anxietyDataPoint => {
                if (anxietyDataPoint.x === date) {
                    sum = sum + anxietyDataPoint.y;
                    ++counter;
                }
              })
              avgAnxietyData.push(sum/counter)
            })
            console.log(avgStressData)
            const avgStressChartData = stressChartData

            // console.log('rendering mood chart', moodChartData)
            // console.log('rendering energy chart', energyChartData)
            // console.log('rendering stress chart', stressChartData)
            // console.log('rendering anxiety chart', anxietyChartData)
            // console.log('rendering emotions chart', emotionChartData)
            console.log('plotting data', stressChartData)
            const chartData = {
                labels: distinctDateData,
                datasets: [
                    {
                        label: "Stress",
                        borderColor: "rgb(255, 99, 131)",
                        backgroundColor: "rgb(255, 99, 131)",
                        pointBorderColor: "rgb(255, 99, 131)",
                        pointBackgroundColor: "rgb(255, 99, 131)",
                        pointHoverBackgroundColor: "rgb(255, 99, 131)",
                        pointHoverBorderColor: "rgb(255, 99, 131)",
                        fill: false,
                        data: avgStressData
                    },
                    {
                        label: "Anxiety",
                        borderColor: "rgb(255, 205, 86)",
                        backgroundColor: "rgb(255, 205, 86)",
                        pointBorderColor: "rgb(255, 205, 86)",
                        pointBackgroundColor: "rgb(255, 205, 86)",
                        pointHoverBackgroundColor: "rgb(255, 205, 86)",
                        pointHoverBorderColor: "rgb(255, 205, 86)",
                        fill: false,
                        data: avgAnxietyData
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
                text: 'Daily Stress and Anxiety Averages'
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
        // this.renderChart()
        return (
            <div>
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

export default connect(mapStateToProps, actions)(ByDayStressAnxiety)