#!/usr/bin/env node

const Path = require('path');
const Fs = require('fs');
const Cmd = require('commander');
const Webpack = require('Webpack');
const Sass = require('node-sass');
const WebpackConfig = require('./../webpack.config.js');
const Watcher = require('watch');
const Colors = require('colors');

/**
 * Parameters used for deciding which assets to build
 * and if source files should be watched for further
 * changes.
 */
Cmd
  .option('-j, --javascript', 'Build Javascript')
  .option('-c, --css', 'Build CSS')
  .option('-w, --watch', 'Watch')
  .parse(process.argv);

/**
 * Logs a formatted message to the console.
 * 
 * @param {string} message Message to log to the console.
 * @param {string} color Color in which to display the message.
 */
function log(message, color) {
  let _d = new Date();
  console.log( _d.toLocaleTimeString() + ' - ' + Colors[color](message) );
}

/**
 * Instantiates Webpack, applies the
 * config and runs a build.
 *
 * For callback configuration options, see: 
 * https://github.com/webpack/docs/wiki/node.js-api
 */
function build_js() {
  let _wp = Webpack(WebpackConfig);
  _wp.run((err, status) => {
    console.log(status.toString({
      assets: true,
      chunks: false,
      timings: false,
      version: false,
      hash: false,
      modules: true,
      errorDetails: true,
      colors: true,
    }));
  });
}

/**
 * Builds CSS and a corresponding map file.
 * 
 * TODO: Add dynamic file functionality.
 */
function build_css() {
  // Render CSS
  let css = Sass.renderSync({
    file: Path.resolve(__dirname, '..', 'src', 'css', 'app.scss'),
    outputStyle: 'compressed',
    outFile: Path.resolve(__dirname, '..', 'prod', 'assets', 'css', 'app.css'),
    sourceMap: true
  });
  
  // Write the CSS file
  Fs.writeFile(Path.resolve(__dirname, '..', 'prod', 'assets', 'css', 'app.css'), css.css, (err) => {
    if (err) {
      log(err + '\r\n', 'red');
    } else {
      log('CSS compiled to ' + Path.resolve(__dirname, '..', 'prod', 'assets', 'css', 'app.css') + '\r\n', 'green');
    }
  });
  
  // Write sourcemap
  Fs.writeFile(Path.resolve(__dirname, '..', 'prod', 'assets', 'css', 'app.css.map'), css.map, (err) => {
    if (err) log(err + '\r\n', 'red');
  });
}

/**
 * Determines which directory to watch when
 * the '-w' or '-watch' arguments are passed
 * to this script.
 * 
 * @return {string}  The directory to watch.
 */
function parseWatch() {
  let dirs = [];
  let dir = null;

  if (Cmd.javascript) dirs.push( Path.resolve(__dirname, '..', 'src', 'javascript') );
  if (Cmd.css) dirs.push( Path.resolve(__dirname, '..', 'src', 'css') );

  if (dirs.length === 1) {
    dir = dirs[0];
  } else {
    dir = Path.resolve(__dirname, '..', 'src');
  }

  log('Watching ' + dir + ' for changes...', 'white');
  return dir;
}

/**
 * Initializes Watcher and begins watching
 * a given directory for changes.
 * 
 * @param path {path} Path of the directory to watch.
 */
function watch (dir) {
  Watcher.createMonitor(dir, (monitor) => {
    monitor.on('changed', (file, current, previous) => {
      log('Detected change on: ' + file, 'green');
      build();
    });
    monitor.on('created', (file, status) => {
      log('New file created: ' + file, 'green');
      build();
    });
    monitor.on('removed', (file, status) => {
      log(file + ' removed...', 'green');
      build();
    });
  });
}

/**
 * Builds assets depending on which parameters
 * were passed to this script.  If no options
 * are passed, build everything.
 */
function build() {
  let opts = [];
  if (Cmd.javascript) opts.push(build_js);
  if (Cmd.css) opts.push(build_css);

  if (opts.length > 0) {
    for (var i = 0; i < opts.length; i++) {
      opts[i]();
    }
  } else {
    build_js();
    build_css();
  }
}

/**
 * Initializes this script.  If the watch option
 * was passed, begins watching the appropriate
 * directories for changes.
 */
function init() {
  build();
  if (Cmd.watch) watch( parseWatch() );
}
init();