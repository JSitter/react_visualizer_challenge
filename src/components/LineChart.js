import React, { Component } from 'react';
import { select, scaleLinear, line, extent , axisBottom, axisLeft, min, max} from 'd3';

class LineChart extends Component {
   constructor(props){
      super(props);
      this.createLineChart = this.createLineChart.bind(this);
   }

   componentDidMount() {
      this.createLineChart(this.props.xSize, this.props.ySize);
   }

   componentDidUpdate() {
      this.createLineChart(this.props.xSize, this.props.ySize);
   }

   createLineChart(svgWidth, svgHeight) {

      let data = this.props.emissionData;

      // Remove NaN's from Dataset
      let filteredData = []
      if (data.length>0){
         data.forEach((d)=>{
            if (!isNaN(d.Year) || !isNaN(d.Total))
               filteredData.push(d)
         })
      }

      // Set SVG Dimensions
      let margin = {top: 20, right: 20, bottom: 30, left: 50};
      let width = svgWidth - margin.left - margin.right;
      let height = svgHeight - margin.top - margin.bottom;

      // Data Range
      let xRange = extent(filteredData, (d) => { return d.Year });
      let yRange = extent(filteredData, (d) => { return d.Total });



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

      y.domain(yRange, (d)=>{ return d.Total });
      x.domain(xRange, (d)=>{ return d.Year });

      let lineGenerator = line()
         .x(function(d){ return x(d.Year) })
         .y(function(d){ return y(d.Total) });

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
         .attr('d', lineGenerator(filteredData))
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