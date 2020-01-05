# Github Portfolio

A single page portfolio app.

## Approach

At the time of this writing, the app uses Flux architecture with Redux for the
data layer and React for the view layer.  This fairly unopinionated approach
allows various layers to be updated as technology progresses.  CSS is handled
with SASS and modularized via Webpack.  JS and JSX are written with TypeScript.

### The Data Layer  
The data layer is built using Redux.  Usage of TypeScript means that actions can
take the form of interfaces.  Most of the buisiness logic for the data layer is
handled by "Action Creators" (functions that return an Action type).
Redux-Thunk is used for more complex actions that need to dispatch multiple
updates to the store.

### The View Layer  
The view layer is built with React, components are divided into two
categories "presentational" and "scaffolding":

Presentational components are essentially self contained widgets, they can be
simply aesthetic or have more complex functionality with internal state and companion classes.  Most importantly, they're designed to be instantiable at any
point on the view layer.

Scaffolding components literally scaffold the structure of the page, arranging
presentational components and allowing the view layer to connect to the data
layer. Scaffolding components are context sensitive, meaning they're only meant
to be used within the immediate context they as appear in the directory
structure.  This approach allows more granular control over how presentational
components are used, while avoiding "prop drilling" and unnecessary renders in
React.

### Lib
The application includes a "lib" directory, intended for code that can be
used in other projects but is still under active development and not yet
formalized into a standalone NPM package.  Code in the Lib directory should have
few to no dependencies, include fairly thorough unit tests, and include runtime validation in the event it is consumed with ECMAScript.

### Tests
Tests are written with Jest and Enzyme.  All layers of the application should
include tests.  Unit tests should aim maximum state coverage, not maximum
function coverage (though this is also fine).


## Installation

**Dependencies** - Later versions may work, but have not been tested.
* Node v10.16.1
* NPM v16.13.2

**Installing**  
With the above installed on your machine, simply run:
```
$ npm install
```

## Building & Running the Project

**Build for development** - Includes debugging tools that can be accessed via
browser extensions.  
```$ npm run build:dev```

**Build for production** - Better minification and debugging tools are excluded
from the bundle.  
```$ npm run build:dist```

**Running the project** - visit http://localhost:3000 in your browser.  
```$ npm start```

**Running tests**  
```$ npm test```

## Directory Overview

**Project Root**
Various configuration files.  Most tools used in this project assume a config
file is placed in the project root, they have been kept here for simplicity.

**Dev**  
Source code.

**Dev/Document**
Template files that comprise the HTML document on which the appears.

**Dev/App**
Application code.


**Dist**  
Compiled code.

**Test**  
Testing tools, materials and metrics.