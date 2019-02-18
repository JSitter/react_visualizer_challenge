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
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li onClick={()=>this.props.updateUrl("emissions")}><Link to="/emissions">Emissions</Link></li>
        <li onClick={()=>this.props.updateUrl("population")}><Link to="/population">Population</Link></li>
        <li onClick={()=>this.props.updateUrl("temperatures")}><Link to="/temperatures">Temperatures</Link></li>
      </ul>
    </div>
  </nav>
    )
  }
}

export default Nav;