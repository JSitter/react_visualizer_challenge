import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render(){
    return (
      <section >
       <p>Hello Google!</p>
      </section>
    );
  };
};
export default App;
let appBody = document.getElementById("app-body");
appBody ? ReactDOM.render(<App/>, appBody) : false;