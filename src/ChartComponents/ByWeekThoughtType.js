
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Chart from "chart.js";

class ByWeekThoughtType extends Component {
    chartRef = React.createRef();

    // componentDidMount() {
    //     this.renderChart()
    // }
    componentDidUpdate() {
        this.renderChart()
    }

        renderChart() {
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
            let thoughtCountByType = []
            distinctThoughtTypes.forEach(thoughtType => {
                let counter = 0
                thoughtTypeData.forEach(thoughtMemoryThoughtType => {
                    if (thoughtMemoryThoughtType === thoughtType) {
                        ++counter
                    }
                })
                thoughtCountByType.push(counter)
            })
            // One array of count by type
            // map data for chart axes and overlays


            const chartData = {
                labels: distinctThoughtTypes,
                datasets: [
                    {
                        label: "Thought Count by Type",
                        borderColor: "rgb(255, 99, 131)",
                        backgroundColor: "rgb(255, 99, 131)",
                        pointBorderColor: "rgb(255, 99, 131)",
                        pointBackgroundColor: "rgb(255, 99, 131)",
                        pointHoverBackgroundColor: "rgb(255, 99, 131)",
                        pointHoverBorderColor: "rgb(255, 99, 131)",
                        fill: false,
                        data: thoughtCountByType
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
                text: 'Thoughts by Type'
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

export default connect(mapStateToProps, actions)(ByWeekThoughtType)