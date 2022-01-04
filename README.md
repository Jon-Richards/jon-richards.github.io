# GitHub Portfolio

A lean front-end for my GitHub portfolio.

## Table Of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running The Project](#running-the-project)

<a id="prerequisites"></a>
## Prerequisites
- Node v14.16+
- NPM v6.14.11+

<a id="installation"></a>
## Installation
```
$ npm install
```

<a id="project-structure"></a>
## Project Structure
```
Project
 |- src \\ Source code
 |- dist \\ Production code and assets
 |- test \\ Test data and analytics
```

<a id="running-the-project"></a>
## Running The Project

Build for development (watches the src directory for changes):
```
$ npm run build:dev
```

Run the dev server:
```
$ npm start
```

Run code quality audits (watches the src directory for changes):
```
$ npm run validate
```

Build for production:
```
$ npm run build:prod
```

Run tests:
```
$ npm test
```

