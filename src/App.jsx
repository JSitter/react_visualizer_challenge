import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
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
          Url:
          {this.state.url}
          <p>Hello Google!</p>

        </section>
      </BrowserRouter>
    );
  };
};

export default App;
let appBody = document.getElementById("app-body");
appBody ? ReactDOM.render(<App/>, appBody) : false;