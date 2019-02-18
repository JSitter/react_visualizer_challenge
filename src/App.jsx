import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import EmissionGraph from './components/EmissionGraph';
import Introduction from './components/Introduction';
import Nav from './components/Nav';
import PopulationGraph from './components/PopulationGraph';
import TemperatureGraph from './components/TemperatureGraph';

import './css/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'fetching': false,
      cur_data : {}
    };
    this.getUrl = this.getUrl.bind(this);

    };
  
  parseEmissions(){

  }

  fetchData(url){
    this.setState({'fetching': true})
    // Get Data from *Hopefully* Google Servers
    fetch(url)
    .then((response)=>{
      if (response.status != 200){
        console.log('There was an error: ', response.status);
        this.setState({'fetching': false})
        return;
      }

      response.json().then((data)=>{
        this.setState({
          cur_data: data,
          'fetching': false
        })
        
      });
    })
    .catch((err)=>this.setState({
      cur_data: err,
      'fetching': false
    }));

  }
  
  getUrl(url){

    // Switch on given route
    if( url == "emissions" ){
      this.fetchData('https://storage.googleapis.com/gweb-dat-coding-challenge-data-sources/global_co2_emissions_from_fossil_fuels.json');
    } else if( url == "population" ){
      this.fetchData('https://storage.googleapis.com/gweb-dat-coding-challenge-data-sources/global_historical_population.json')
    } else if( url == "temperatures"){
      this.fetchData('https://storage.googleapis.com/gweb-dat-coding-challenge-data-sources/global_temp_time_series_annual.json')
    }
  };

  render(){
    return (
      <BrowserRouter>
        <section>
          <Nav getUrl={this.getUrl}/>
          
          
          <Route exact path="/" component={Introduction} />
          <Route path="/emissions" component={EmissionGraph} />
          <Route path="/population" component={PopulationGraph} />
          <Route path="/temperatures" component={TemperatureGraph} />

          <section id="debug">Url Return: {JSON.stringify(this.state.cur_data)}</section>
        </section>
      </BrowserRouter>
    );
  };
};

export default App;
let appBody = document.getElementById("app-body");
appBody ? ReactDOM.render(<App/>, appBody) : false;