import React, { Component } from 'react';
import LineChart from './LineChart';
import { isNullOrUndefined } from 'util';

class PopulationGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filteredData': []
    };
    this.firstElement = {};
  };

  componentDidUpdate(){
    // Only clean data if new
    if ('Average' in this.props.populationData[0]){
      console.log("Retrieved population data:",this.props.populationData);
      if ('Average' in this.firstElement ){
        if (this.firstElement.Average != this.props.populationData[0].Average){
          let cleaned = this.cleanData(this.props.populationData[0]);
          this.setState({'filteredData': cleaned});
          this.firstElement = this.props.populationData[0];
        };
      } else {
        let cleaned = this.cleanData(this.props.populationData[0]);
        this.setState({filteredData: cleaned});
        this.firstElement = this.props.populationData[0];
      };
    };
    
  };

  cleanData(){
    let data = this.props.populationData;
    let xColumnName = 'Year';
    let yColumnName = 'Average';
    // Remove NaN's from Dataset
    let filteredData = []

    data.filter(row => {
      if ((!isNaN(row.Average) && !isNullOrUndefined(row.Average)) && ( row.Year != '0'))
        filteredData.push({'X':row[xColumnName], 'Y':row[yColumnName]})
        
    } );
    console.log("Filtered Data: {}", filteredData);
    return filteredData;
  }

  render(){
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
  };
};

export default PopulationGraph;   