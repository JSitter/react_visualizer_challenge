import React, { Component } from 'react';
import { select, scaleLinear, scaleTime, line, extent , axisBottom, axisLeft, min, max, nest, time} from 'd3';
import { timeFormat } from 'd3-time-format';

class LineChart extends Component {
   constructor(props){
      super(props);

      this.createLinearChart = this.createLinearChart.bind(this);
      this.createTimeSeriesChart = this.createTimeSeriesChart.bind(this);
      this.drawChart = this.drawChart.bind(this)
      
   }

   componentDidMount() {
      this.drawChart(this.props.xSize, this.props.ySize);
      console.log("Mounted")
   }

   componentDidUpdate() {
      this.drawChart(this.props.xSize, this.props.ySize);
   }

   drawChart(xSize, ySize){
      console.log("Console your fears")
      if ("time-plot" in this.props){
         this.createTimeSeriesChart(xSize, ySize);
      }else{
         this.createLinearChart(xSize, ySize);
      }
   }

   createTimeSeriesChart(svgWidth, svgHeight){
      let df = this.props.data

      console.log("Dataframe", df)

      // Set SVG Dimensions
      let margin = {top: 20, right: 20, bottom: 30, left: 50};
      let width = svgWidth - margin.left - margin.right;
      let height = svgHeight - margin.top - margin.bottom;

      
      // Data Range
      let xRange = extent(df, (d) => { return new Date(d.X, 1, 1) });
      console.log("Xrange: ", xRange);
      let yRange = extent(df, (d) => { return d.Y });

      // Set SVG Size
      let svg = select('svg')
         .attr('width', svgWidth)
         .attr('height', svgHeight);
      
      // Add groups
      let g = svg.append('g')
         .attr('transform',
            'translate('+ margin.left + ',' + margin.top + ')'
         );
      
      // XY Scales
      
      let x = scaleTime();
      x.domain(xRange);
      x.range([0, width]);
      
      let y = scaleLinear().rangeRound([height, 0]);

      
      y.domain(yRange, (d)=>{ return d.Y });

      let lineGenerator = line()
         .x(function(d){ return x(new Date(d.X, 1, 1)) })
         .y(function(d){ return y(d.Y) });
     
     

         g.append('g')
         .attr('transform', 'translate(0,' + height + ')')
         .call(axisBottom(x))
         .select('.domain')
         .remove();

      g.append('g')
         .call(axisLeft(y))
         .append('text')
         .attr('fill', '#888')
         .attr('transform', 'rotate(-90)')
         .attr('y', 5)
         .attr('dy', '0.9em')
         .attr('text-anchor', 'end')
         .text(this.props.xAxisText);

      g.append('path')
         .attr('d', lineGenerator(df))
         .attr('fill', 'none')
         .attr('stroke', 'blue')
         .attr('stroke-linejoin', 'round')
         .attr('stroke-linecap', 'round')
         .attr('stroke-width', 2);
   }

   createLinearChart(svgWidth, svgHeight) {

      let df = this.props.data

      console.log("Dataframe", df)

      // Set SVG Dimensions
      let margin = {top: 20, right: 20, bottom: 30, left: 50};
      let width = svgWidth - margin.left - margin.right;
      let height = svgHeight - margin.top - margin.bottom;

      
      // Data Range
      let xRange = extent(df, (d) => { return d.X });
      console.log("Xrange: ", xRange);
      let yRange = extent(df, (d) => { return d.Y });

      // Set SVG Size
      let svg = select('svg')
         .attr('width', svgWidth)
         .attr('height', svgHeight);
      
      // Add groups
      let g = svg.append('g')
         .attr('transform',
            'translate('+ margin.left + ',' + margin.top + ')'
         );
      
      // XY Scales
      let x = scaleLinear().rangeRound([0, width]);
      let y = scaleLinear().rangeRound([height, 0]);

      x.domain(xRange, (d)=>{ return d.X });
      y.domain(yRange, (d)=>{ return d.Y });

      let lineGenerator = line()
         .x(function(d){ return x(d.X) })
         .y(function(d){ return y(d.Y) });
     
     
      g.append('g')
         .attr('transform', 'translate(0,' + height + ')')
         .call(axisBottom(x))
         .select('.domain')
         .remove();

      g.append('g')
         .call(axisLeft(y))
         .append('text')
         .attr('fill', '#888')
         .attr('transform', 'rotate(-90)')
         .attr('y', 5)
         .attr('dy', '0.9em')
         .attr('text-anchor', 'end')
         .text(this.props.xAxisText);

      g.append('path')
         .attr('d', lineGenerator(df))
         .attr('fill', 'none')
         .attr('stroke', 'blue')
         .attr('stroke-linejoin', 'round')
         .attr('stroke-linecap', 'round')
         .attr('stroke-width', 2);
      
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