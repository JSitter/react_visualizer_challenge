import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import './css/style.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <section>
          <Nav />
          <p>Hello Google!</p>
          <p>Muchas Gracias</p>
        </section>
      </BrowserRouter>
    );
  };
};

export default App;
let appBody = document.getElementById("app-body");
appBody ? ReactDOM.render(<App/>, appBody) : false;