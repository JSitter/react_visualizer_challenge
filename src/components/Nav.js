import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right"><Link to="/">Dataset Challenge</Link></a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li onClick={()=>this.props.getUrl("emissions")}><Link to="/emissions">Emissions</Link></li>
        <li onClick={()=>this.props.getUrl("population")}><Link to="/population">Population</Link></li>
        <li onClick={()=>this.props.getUrl("temperatures")}><Link to="/temperatures">Temperatures</Link></li>
      </ul>
    </div>
  </nav>
    )
  }
}

export default Nav;