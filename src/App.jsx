import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <section>
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