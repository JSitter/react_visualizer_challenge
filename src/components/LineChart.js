import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';

class LineChart extends Component {
   constructor(props){
      super(props);
      this.createLineChart = this.createBarChart.bind(this);
   }

   componentDidMount() {
      this.createLineChart();
   }

   componentDidUpdate() {
      this.createLineChart();
   }

   createLineChart() {
      //Create line Chart Here
   }

render() {
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}
export default LineChart;