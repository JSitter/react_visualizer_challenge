import React, { Component } from 'react';
import LineChart from './LineChart';

class TemperatureGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filteredData': []
    };
    this.firstElement = {};
  };

  componentDidUpdate(){
        // Only clean data if new
        console.log("temp data", this.props.temperatureData)
        if ('Year' in this.props.temperatureData[0]){
          if ('Year' in this.firstElement ){
            if (this.firstElement.Year != this.props.temperatureData[0].Year){
              let cleaned = this.cleanData(this.props.temperatureData)
              this.setState({'filteredData': cleaned})
              this.firstElement = this.props.temperatureData[0]
            };
          } else {
            let cleaned = this.cleanData(this.props.temperatureData)
            this.setState({filteredData: cleaned})
            this.firstElement = this.props.temperatureData[0]
          };
        };
  };

  cleanData(){
    let data = this.props.temperatureData;
    console.log("Clean DATa", data);
    console.log("Props", this.props)

    let xColumnName = 'Year';
    let yColumnName = 'Mean';
    // Remove NaN's from Dataset
    let filteredData = []
    if (data.length>0){
       data.forEach((d)=>{
          if (!isNaN(d[xColumnName]) || !isNaN(d[yColumnName]))
             filteredData.push({'X':d[xColumnName], 'Y':d[yColumnName]});
       });
    };
    return filteredData;
  };

  render(){
    return (
      <section id="main">
        <h2>Temperature Over Time</h2>
        <LineChart data={this.state.filteredData} xSize={1200} ySize={400} xAxisText={'Average global mean temperature anomalies'}/>
      </section>
    )
  }
}

export default TemperatureGraph;   