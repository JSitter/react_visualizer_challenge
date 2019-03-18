import React, { Component } from 'react';
import LineChart from './LineChart';
import CleanDF from '../helpers/cleaning';

class PopulationGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filteredData': []
    };
  };

  componentDidUpdate(){
    // Only clean data if it exists
    if ('Average' in this.props.populationData[0]){
      if(this.state.filteredData.length == 0){
        let cleaner = new CleanDF(this.props.populationData, 'Year')
        let df = cleaner.cleanData();
        this.setState({'filteredData': df});
      }
        
    };
  };

  render(){
    if(this.state.filteredData.length > 0){
      return (
        <section id="main">
          <h2>Population over Time</h2>
          <LineChart 
            data={this.state.filteredData} 
            xSize={this.props.graphWidth} 
            ySize={this.props.graphHeight} 
            xAxisText={'Number of People in Millions'}
          />
        </section>
      );
  }
  return (
    <section id="main">
      <h2>Emissions</h2>
      <div class="progress">
        <h2>Awaiting Data from Servers....</h2>
        <div class="indeterminate"></div>
      </div>
    </section>
  );
  }
};

export default PopulationGraph;   