import React, { Component } from 'react';

class Introduction extends Component {
  render(){
    return (

        
        <section class="intro-description">

        <h2>Dataset Visualizations</h2>
        <p>This application is meant visualize various datasets provided by Google.</p>
        <p>This visualization shows global historical temperature, population, and carbon emission data over various years.</p>

      <p>The D3 visualizations included in this web application all use the same component. This component can be scaled differently depending on the application. Using the time scale works for most years unless they're very large (such as in the global population dataset). In this case, using scaleTime on these large number return undefined and therefore won't draw the plot. At these time scales using the linear plot works well though the years are shown with a thousands separator.
      
      <h2>Planned Features</h2>
      Zooming and panning would be a great addition to the D3 visualization component. This would allow for better inspection of datapoints along a large time frame. The population dataset could really benefit from being able to zoom in on the areas or recent history to really see how the population has changed not just in the last million years, but also in the last few thousand years. </p>
        
        </section>

    )
  }
}

export default Introduction;  