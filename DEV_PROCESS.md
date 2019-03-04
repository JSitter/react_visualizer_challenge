# Development Process

## Design and Architecture

This application is designed to use React and D3 to visualize datasets provided by Google. These datasets include the population of the planet over the course of the last million years, global carbon emissions since the 1700s, and the global temperature data since 1880.

The decision to not commit auto-generated files in the repository stemmed from the challenge requirement that all commits must be less than 300 lines in length. As such the repository must be built with webpack before it will work in production.

This application uses express to serve data to the user, React to manage state on the front end and D3 to visualize the data that is retrieved from Google's servers.

## Decisions and Assumptions Made

This project uses React compiled with webpack and Babel to manage state on the front end. By using React, one component was able to be built that is able to visualize the different types of data that is returned from the diffent datasets that were offered up by Google.

## Roadblocks Encountered

While I'm familiar with React, Express, NodeJS, it was my first time using the D3 library for visualization. As such creating the visualization took me longer than it should have taken. Using D3 allows for creating visualizations using stylable SVG components and allow for performant and beautiful looking graphs. 

## Trade-offs made (and why).

I decided to use D3 as it is a common tool for data visualization on the web. Jumping in,I encountered a bit of a learning curve as the methods for cleaning and scaling data are very differnt then the previous way I was accustomed to doing data visualization -- namely using Pandas and Matplotlib for visualization and cleaning. The tradeoff was greater development time in favor of a fast, re-usable implementation that can be embedded into a front end application with little fuss. The D3 visualization library is one of the best front end tools for data visualization available, and is worth the extra development cost due to the features and flexibility that it brings to the table.

## Solution created

The solution I implemented used styles from the Materialize theme with additional custom styling to add a more unique look and feel to the site. Materialize takes care of all the little styling details and animations while also allowing for a unique experience by also allowing customization.

## Bonus Points

Clear, readable, and maintainable code is always a priority when creating a project. When working with a team of people the person the builds a piece of a project will not necessarily be the one that maintains it down the line. Making sure that code is organized in a way that is easy to follow and by adding comments to blocks of code that may difficult to understand decreases that amount of technical debt built into a project. 

Part of the process of creating clear code happens when you use the proper tools that are given to you. Promises allow for greater clarity by removing the need for nested callback functions and the required error handling that goes along with it. Because of this Javascript promises were used whenever possible to keep code clean and readable.

The largest part of my developement process was focused on learning and using D3. This  slowed my process down considerably though it was a great learning opportunity and will allow me to use D3 in future projects with little issue.