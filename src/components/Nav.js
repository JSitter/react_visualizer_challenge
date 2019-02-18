import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to="/emissions">Emissions</Link></li>
        <li><Link to="/population">Population</Link></li>
        <li><Link to="/temperatures">Temperatures</Link></li>
      </ul>
    </div>
  </nav>
    )
  }
}

export default Nav;