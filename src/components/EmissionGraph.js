import React, { Component } from 'react';
import LineChart from './LineChart';

class EmissionGraph extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <section id="main">
        <h2>Emissions</h2>
        <LineChart emissionData={this.props.emissionData} xSize={800} ySize={800} xAxisText={'Total Carbon in Birds per Second'}/>
      </section>
    )
  }
}

export default EmissionGraph;   