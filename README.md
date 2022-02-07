# GitHub Portfolio

A lean front-end for my GitHub portfolio.

## Table Of Contents
- [TODO](#todo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running The Project](#running-the-project)

<a id="todo"></a>
Since Feb 6, 2022:
- [ ] Add relevant calls for Github API
- [ ] Come up with solution for overriding inaccurate data, e.g. which language
      a given project is based around.
- [ ] Continue fleshing out project gallery.
- [ ] Add about section.
- [ ] Finish off header navigation.
- [ ] Find an icon set.
- [ ] Finish footer.

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
 |- public \\ Production code and assets
 |- test \\ Test data and analytics
 |- scripts \\ Helper scripts
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

Build for production:
```
$ npm run build:prod
```

Run tests:
```
$ npm test
```

