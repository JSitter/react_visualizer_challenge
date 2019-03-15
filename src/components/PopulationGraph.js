import React, { Component } from 'react';
import LineChart from './LineChart';
import { isNullOrUndefined } from 'util';
import { isNull } from 'util';

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

    let filteredData = []
    let lines = {}

    let pilferedData = data.map(row => {
      Object.keys(row).forEach((key)=>{
        if (!(key == xColumnName) && !isNullOrUndefined(row[xColumnName]) && !isNaN(row[key]) && !isNullOrUndefined(row[key])){
          
            if (lines.hasOwnProperty(key)){
              lines[key].push({'X':row[xColumnName], 'Y':row[key]})
            }else{
              lines[key] = [{'X':row[xColumnName], 'Y':row[key]}]
            }
        }
      })
      if ((!isNaN(row[xColumnName]) && !isNullOrUndefined(row[xColumnName])) && ( row[yColumnName] != '0'))
        
        return {'X':row[xColumnName], 'Y':row[yColumnName]}
        
    } );
    console.log("Line Data: {}", lines);
    return lines['Average'];
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