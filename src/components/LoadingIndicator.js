import React, { Component } from 'react';

class LoadingIndicator extends Component {
  render(){
    return(
      <div class="progress">
        <h2>Awaiting Data from Servers....</h2>
        <div class="indeterminate"></div>
      </div>
    )
  }
}

export default LoadingIndicator