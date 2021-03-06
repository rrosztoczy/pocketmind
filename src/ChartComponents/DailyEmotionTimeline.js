
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class DailyEmotionTimelineChart extends Component {
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
            const chartData = {
                // labels: formattedDateTime,
                // TODO: Make these data points specific to a day... the values averaged for that day
                datasets: [
                    {
                        label: "Mood",
                        borderColor: "#80b6f4",
                        backgroundColor: "#80b6f4",
                        pointBorderColor: "#80b6f4",
                        pointBackgroundColor: "#80b6f4",
                        pointHoverBackgroundColor: "#80b6f4",
                        pointHoverBorderColor: "#80b6f4",
                        fill: false,
                        data: moodChartData
                    },
                    {
                        label: "Energy",
                        borderColor: "rgb(255, 205, 86)",
                        backgroundColor: "rgb(255, 205, 86)",
                        pointBorderColor: "rgb(255, 205, 86)",
                        pointBackgroundColor: "rgb(255, 205, 86)",
                        pointHoverBackgroundColor: "rgb(255, 205, 86)",
                        pointHoverBorderColor: "rgb(255, 205, 86)",
                        fill: false,
                        data: energyChartData
                    },
                    {
                        label: "Stress",
                        borderColor: "#80b6f4",
                        backgroundColor: "#80b6f4",
                        pointBorderColor: "#80b6f4",
                        pointBackgroundColor: "#80b6f4",
                        pointHoverBackgroundColor: "#80b6f4",
                        pointHoverBorderColor: "#80b6f4",
                        fill: false,
                        data: stressChartData
                    },
                    {
                        label: "Anxiety",
                        borderColor: "#80b6f4",
                        backgroundColor: "#80b6f4",
                        pointBorderColor: "#80b6f4",
                        pointBackgroundColor: "#80b6f4",
                        pointHoverBackgroundColor: "#80b6f4",
                        pointHoverBorderColor: "#80b6f4",
                        fill: false,
                        data: anxietyChartData
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
            scales: {
                xAxes: [{
                    type: "Week",
                    time: {
                        unit: 'hour',
                        unitStepSize: 1.0,
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
            type: 'line',
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
            <div>
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

export default connect(mapStateToProps, actions)(DailyEmotionTimelineChart)