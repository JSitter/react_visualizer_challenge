import React, { Component } from 'react';
import { select, scaleLinear, scaleTime, line, extent , axisBottom, axisLeft} from 'd3';

class LineChart extends Component {
   constructor(props){
      super(props);

      this.createLinearChart = this.createLinearChart.bind(this);
      this.createTimeSeriesChart = this.createTimeSeriesChart.bind(this);
      this.drawChart = this.drawChart.bind(this)
      
   }

   componentDidMount() {
      this.drawChart(this.props.xSize, this.props.ySize);
   }

   componentDidUpdate() {
      this.drawChart(this.props.xSize, this.props.ySize);
   }

   drawChart(xSize, ySize){
      if ("time-plot" in this.props){
         this.createTimeSeriesChart(xSize, ySize);
      }else{
         this.createLinearChart(xSize, ySize);
      }
   }

   drawSVG(svgWidth, svgHeight, margin, xRange, yRange){
         // Set SVG Size
         let svg = select('svg')
         .attr('width', svgWidth)
         .attr('height', svgHeight);
      let height = svgHeight - margin.top + margin.bottom
      let width = svgWidth - margin.left + margin.right
      
      // Add groups
      let g = svg.append('g')
         .attr('transform',
            'translate('+ margin.left + ',' + margin.top + ')'
         );

      g.append('g')
         .attr('transform', 'translate(0,' + height + ')')
         .call(axisBottom(xRange))
         .select('.domain')
         .remove();

      g.append('g')
         .call(axisLeft(yRange))
         .append('text')
         .attr('fill', '#888')
         .attr('transform', 'rotate(-90)')
         .attr('y', 5)
         .attr('dy', '0.9em')
         .attr('text-anchor', 'end')
         .text('this.props.xAxisText');
      return g
   }

   addLines(g, df, lineGenerator){

      g.selectAll('.line-path').data(df)
         .enter().append('path')
         .attr('class', 'line-path')
         .attr('d', d => lineGenerator(d.value))
         .attr('fill', 'none')
         .attr('stroke', 'blue')
         .attr('stroke-linejoin', 'round')
         .attr('stroke-linecap', 'round')
         .attr('stroke-width', 2);
   }

   createTimeSeriesChart(svgWidth, svgHeight){
      let df = this.props.data;

      if(df.length == 0){
         return 0
      }

      // Set SVG Dimensions
      let margin = {top: 20, right: 20, bottom: 30, left: 50};
      let width = svgWidth - margin.left - margin.right;
      let height = svgHeight - margin.top - margin.bottom;

      // Find Data Range
      let xRanges = [];
      let yRanges = [];
      
      df.forEach((row)=>{
         row.value.forEach(coords => {
            xRanges.push(new Date(coords.X, 1, 1))
            yRanges.push(coords.Y)
         });
      });

      let xRange = []
      let yRange = []

      if (xRanges.length > 0){
         xRange = extent(xRanges);
         yRange = extent(yRanges);
      }
      
      // Set XY Scales
      let x = scaleTime();
      x.domain(xRange);
      x.range(yRange);

      let y = scaleLinear().rangeRound([height, 0]);
      y.domain(yRange);

      // Create line generator
      let lineGenerator = line()
      .x(function(d){ return x(new Date(d.X, 1, 1)); })
      .y(function(d){ return y(d.Y); });

      // Append Elements to DOM
      let g = this.drawSVG(svgWidth, svgHeight, margin, x, y)
      
      this.addLines(g, df, lineGenerator);

   }

   createLinearChart(svgWidth, svgHeight) {
      
      let df = this.props.data;

      if(df.length == 0){
         return 0
      }

      // Set SVG Dimensions
      let margin = {top: 20, right: 20, bottom: 30, left: 50};
      let width = svgWidth - margin.left - margin.right;
      let height = svgHeight - margin.top - margin.bottom;

      // Data Range
      let xRanges = [];
      let yRanges = [];
      
      df.forEach((row)=>{
         row.value.forEach(coords => {
            xRanges.push(coords.X)
            yRanges.push(coords.Y)
         });
      });

      let xRange = []
      let yRange = []

      if (xRanges.length > 0){
         xRange = extent(xRanges);
         yRange = extent(yRanges);
      }
      
      
      
      // XY Scales
      let x = scaleLinear().rangeRound([0, width]);
      x.domain(xRange);

      let y = scaleLinear().rangeRound([height, 0]);
      y.domain(yRange);
      
      let lineGenerator = line()
         .x(function(d){ return x(d.X); })
         .y(function(d){ return y(d.Y); });
      
      let g = this.drawSVG(svgWidth, svgHeight, margin, x, y)

      this.addLines(g, df, lineGenerator);
      
   }

render() {
      return (
      <div>
         <svg ref={node => this.node = node} >
         </svg>
      </div>
      )
   }
}
export default LineChart;