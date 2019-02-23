import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render(){
    return (
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Google Dataset Challenge</h5>
                <p class="grey-text text-lighten-4">This is a demonstration of using D3 and React to visualize data.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Data Visualizations</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><Link to="/emissions">Global Emissions</Link></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><Link to="/population">Historical Population</Link></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><Link to="/temperatures">Global Temperatures</Link></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Built by Justin Sitter
            <a class="grey-text text-lighten-4 right" href="https://github.com/JSitter/react_visualizer_challenge">View the source on GitHub</a>
            </div>
          </div>
        </footer>
    );
  };
};

export default Footer;