
import React, { Component } from 'react'
import Chart from "chart.js";
import * as actions from '../actions';
import { connect } from 'net';

class MemoryTimeline extends Component {
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
            const memoryData = this.props.memories
            const trumpetRootUrls = trumpetData.map(trumpet => trumpet.website.root_url)
            console.log("roots", trumpetRootUrls)
            const labels = [... new Set(trumpetRootUrls)]
            let counts = {};
            trumpetRootUrls.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
            console.log("line counts", counts)
            const chartData = labels.map(label => counts[label])
            console.log("chart data", chartData)
            const prettyColors = ["rgb(255, 99, 131)", "rgb(55, 162, 235)", "rgb(255, 205, 86)", "#FF9026", "#4BC1C0",  "#4BC1C0"]
            const opaquePrettyColors = ["rgb(255, 99, 131, 0.3)", "rgb(55, 162, 235, 0.3)", "rgb(255, 205, 86, 0.3)", "rgb(255, 126, 4, 0.3)", "rgb(75, 193, 192, 0.3)", "rgb(75, 193, 192, 0.3)"]
            new Chart(myChartRef, {
                type: "bar",
                data: {
                    //Bring in data
                    labels: labels,
                    datasets: [
                        {
                            label: labels,
                            data: chartData,
                            backgroundColor: opaquePrettyColors,
                            borderColor: prettyColors,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    render() {
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
    console.log("new state", state)
    return {
        memories: ,
    }
};

export default connect(mapStateToProps, actions)(MemoryTimeline)