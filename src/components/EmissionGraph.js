import React, { Component } from 'react';
import LineChart from './LineChart';

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

    // Only clean data if new
    if ('Year' in this.props.emissionData[0]){
      if ('Year' in this.firstElement ){
        if (this.firstElement.Year != this.props.emissionData[0].Year){
          let cleaned = this.cleanData(this.props.emissionData)
          this.setState({'filteredData': cleaned})
          this.firstElement = this.props.emissionData[0]
        };
      } else {
        let cleaned = this.cleanData(this.props.emissionData)
        this.setState({filteredData: cleaned})
        this.firstElement = this.props.emissionData[0]
      };
    };
    
  };

  cleanData(){
    let data = this.props.emissionData;

    // Remove NaN's from Dataset
    let filteredData = []
    if (data.length>0){
       data.forEach((d)=>{
          if (!isNaN(d.Year) || !isNaN(d.Total))
             filteredData.push({'X':d.Year, 'Y':d.Total});
       });
    };
    return filteredData;
  };

  render(){
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
  };
};

export default EmissionGraph;   