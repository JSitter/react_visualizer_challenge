import React, { Component } from 'react';
import LineChart from './LineChart';
import CleanDF from '../helpers/cleaning';
// import LoadingIndicator from './LoadingIndicator';

class EmissionGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filteredData': [],
      'windowWidth': 300
    };
    this.firstElement = {};
 };

  componentWillMount(){
    this.setState({'windowWidth': window.Width})
  }

  componentDidUpdate(){
    // Only clean data if it exists
    if ('Solid Fuel' in this.props.emissionData[0]){
      if(this.state.filteredData.length == 0){
        let cleaner = new CleanDF(this.props.emissionData, 'Year')
        let df = cleaner.cleanData();
        this.setState({'filteredData': df});
      }
    };
  };

  render(){
    if(this.state.filteredData.length > 0){
      return (
        <section id="main">
          <h2>Emissions</h2>
          <LineChart 
            data={this.state.filteredData} 
            xSize={this.props.graphWidth} 
            ySize={this.props.graphHeight} 
            xAxisText={'Total Carbon in Million Metric Tons'}
            time-plot={true}
          />
        </section>
      );
    }else{
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
};

export default EmissionGraph;   