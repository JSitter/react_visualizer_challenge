import React, { Component } from 'react';
import LineChart from './LineChart';

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
    let yColumnName = 'Deevey';
    // Remove NaN's from Dataset
    let filteredData = []
    if (data.length>0){
       data.forEach((d)=>{
          if (!isNaN(d[xColumnName]) || !isNaN(d[yColumnName]))
             filteredData.push({'X':d[xColumnName], 'Y':d[yColumnName]});
       });
    };

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