
import React, { Component } from 'react'
import Chart from "chart.js";
import * as actions from '../actions';
import { connect } from 'net';

class MemoryTimelineChart extends Component {
    chartRef = React.createRef();

    // shouldComponentUpdate(nextProps) {
    // }

    // componentDidMount() {
    //     this.renderChart()
    // }
    // componentDidUpdate() {
    //     this.renderChart()
    // }

        renderChart() {
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
            const emotionMemoryDates = emotionMemoryData.map(emotionMemory => emotionMemory.createdAt)
            const thoughtMemoryDates = thoughtMemoryData.map(thoughtMemory => thoughtMemory.createdAt)
            // Create x/y points for a time axis by creating array of hash with x: new Date(date) and y: the appropriate data set
            const moodChartData = emotionMemoryDates.map((emotionMemoryDate, i) => ({x: new Date(emotionMemoryDate), y: moodLevel[i]}))
            console.log(moodChartData)
            // map data for labels

            // **************************************Optimization****************************************************************
            // TODO: I want to display multiple data points for emotions if they exist and build the line off of the average at that point 
            // TODO: I want to display multiple data points for thoughts if they exist
            // TODO: I want to display multiple data points for activities if they exist
            // *******************************************************************************************************************


    //         const moodLevel = memoryData.map(memory => memory.website.root_url)
    //         console.log("roots", trumpetRootUrls)
    //         const labels = [... new Set(trumpetRootUrls)]
    //         let counts = {};
    //         trumpetRootUrls.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    //         console.log("line counts", counts)
    //         const chartData = labels.map(label => counts[label])
    //         console.log("chart data", chartData)
    //         const prettyColors = ["rgb(255, 99, 131)", "rgb(55, 162, 235)", "rgb(255, 205, 86)", "#FF9026", "#4BC1C0",  "#4BC1C0"]
    //         const opaquePrettyColors = ["rgb(255, 99, 131, 0.3)", "rgb(55, 162, 235, 0.3)", "rgb(255, 205, 86, 0.3)", "rgb(255, 126, 4, 0.3)", "rgb(75, 193, 192, 0.3)", "rgb(75, 193, 192, 0.3)"]
    //         new Chart(myChartRef, {
    //             type: "bar",
    //             data: {
    //                 //Bring in data
    //                 labels: labels,
    //                 datasets: [
    //                     {
    //                         label: labels,
    //                         data: chartData,
    //                         backgroundColor: opaquePrettyColors,
    //                         borderColor: prettyColors,
    //                         borderWidth: 1
    //                     }
    //                 ]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero: true
    //                         }
    //                     }]
    //                 }
    //             }
    //         });
    //     }
    // render() {
    //     return (
    //         <div>
    //             <canvas
    //                 id="myBarChart"
    //                 ref={this.chartRef}
    //             />
    //         </div>
    //     )
    // }
}

const mapStateToProps = state => {
    console.log("new state", state)
    return {
        memories: ,
    }
};

export default connect(mapStateToProps, actions)(MemoryTimelineChart)