import React, { Component } from 'react';
import LineChart from './LineChart';
import CleanDF from '../helpers/cleaning';
import LoadingIndicator from './LoadingIndicator';

class TemperatureGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filteredData': []
    };
    this.firstElement = {};
  };

  componentDidUpdate(){
    // Only clean data if it exists
    console.log(this.props.temperatureData)
    if ('Mean' in this.props.temperatureData[0]){
      if(this.state.filteredData.length == 0){
        let cleaner = new CleanDF(this.props.temperatureData, 'Year')
        let df = cleaner.cleanData();
        this.setState({'filteredData': df});
      }
    };
  };

  render(){
    if(this.state.filteredData.length > 0){
      return (
        <section id="main">
          <h2>Temperature Over Time</h2>
          <LineChart 
            data={this.state.filteredData} 
            xSize={this.props.graphWidth} 
            ySize={this.props.graphHeight} 
            xAxisText={'Average global mean temperature anomalies'}
            time-plot={true}
          />
        </section>
      )
  }
  return (
    <section id="main">
      <h2>Emissions</h2>
      <LoadingIndicator/>
    </section>
  )
  }
}

export default TemperatureGraph;   