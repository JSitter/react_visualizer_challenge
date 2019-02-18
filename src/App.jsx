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
      url : ""
    };
    this.updateUrl = this.updateUrl.bind(this);

    };

  updateUrl(url){
    this.setState({url});
  };

  render(){
    return (
      <BrowserRouter>
        <section>
          <Nav updateUrl={this.updateUrl}/>
          
          
          <Route exact path="/" component={Introduction} />
          <Route path="/emissions" component={EmissionGraph} />
          <Route path="/population" component={PopulationGraph} />
          <Route path="/temperatures" component={TemperatureGraph} />

          <section id="debug">Url: {this.state.url}</section>
        </section>
      </BrowserRouter>
    );
  };
};

export default App;
let appBody = document.getElementById("app-body");
appBody ? ReactDOM.render(<App/>, appBody) : false;