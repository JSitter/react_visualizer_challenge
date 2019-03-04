import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    M.AutoInit();
  }

  render(){
    return (
    <section>
      <ul id="dropdown1" class="dropdown-content">
      <li  onClick={()=>this.props.getUrl("emissions")}><Link to="/emissions">Emissions</Link></li>
            <li onClick={()=>this.props.getUrl("population")}><Link to="/population">Population</Link></li>
            <li  onClick={()=>this.props.getUrl("temperatures")}><Link to="/temperatures">Temperatures</Link></li>
      </ul>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right"><Link to="/">Dataset Challenge</Link></a>
          <ul id="nav-desktop" class="left">
          
          
            <li class="hide-on-small-and-down" onClick={()=>this.props.getUrl("emissions")}><Link to="/emissions">Emissions</Link></li>
            <li class="hide-on-small-and-down" onClick={()=>this.props.getUrl("population")}><Link to="/population">Population</Link></li>
            <li class="hide-on-small-and-down" onClick={()=>this.props.getUrl("temperatures")}><Link to="/temperatures">Temperatures</Link></li>
            <li><a class="dropdown-trigger hide-on-med-and-up show-on-small" href="#!" data-target="dropdown1">Data Sets<i class="material-icons right"></i></a></li>
          </ul>
        </div>
      </nav>
      </section>

    
    )
  }
}

export default Nav;