import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import EmissionGraph from './components/EmissionGraph';
import Introduction from './components/Introduction';
import Nav from './components/Nav';
import PopulationGraph from './components/PopulationGraph';
import TemperatureGraph from './components/TemperatureGraph';
import IntroductionHeader from './components/IntroductionHeader';
import EmissionHeader from './components/EmissionHeader';
import PopulationHeader from './components/PopulationHeader';
import TemperatureHeader from './components/TemperatureHeader';
import Footer from './components/Footer';

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
        });
        
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
            <Route exact path="/" component={IntroductionHeader} />
            <Route path="/emissions" component={ EmissionHeader } />
            <Route path="/population" component={ PopulationHeader } />
            <Route path="/temperatures" component={ TemperatureHeader } />
            <Nav getUrl={this.getUrl}/>
            
            <Route exact path="/" component={Introduction} />
            <Route path="/emissions" render={() => <EmissionGraph emissionData={this.state.cur_data} graphWidth={window.innerWidth - 75} graphHeight={window.innerWidth / 2}/>}/>

            <Route path="/population" render={() => <PopulationGraph populationData={this.state.cur_data} graphWidth={window.innerWidth - 75} graphHeight={window.innerWidth / 2}/>} />

            <Route path="/temperatures" render={() => <TemperatureGraph temperatureData={this.state.cur_data} graphWidth={window.innerWidth - 75} graphHeight={window.innerWidth / 2}/>} />

            {/* <section id="debug">Url Return: {JSON.stringify(this.state.cur_data)}</section> */}
            <Footer getUrl={this.getUrl}/>
          </section>
        </BrowserRouter>
    );
  };
};

export default App;
let appBody = document.getElementById("app-body");
appBody ? ReactDOM.render(<App/>, appBody) : false;