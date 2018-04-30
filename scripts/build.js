#!/usr/bin/env node

const Path = require('path');
const Cmd = require('commander');
const Webpack = require('Webpack');
const WebpackConfig = require('./../webpack.config.js');
const Watcher = require('watch');

/*
 * Parameters used for deciding which assets to build
 * and if source files should be watched for further
 * changes.
 */
Cmd
  .option('-j, --javascript', 'Build Javascript')
  .option('-c, --css', 'Build CSS')
  .option('-w, --watch', 'Watch')
  .parse(process.argv);

/*
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

/*
 * Builds CSS
 */
function build_css() {
  console.log('Build CSS!');
}

/*
 * Determines which directory to watch when
 * the '-w' or '-watch' arguments are passed
 * to this script.
 * 
 * @return  string  The directory to watch.
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

  console.log('Watching ' + dir + ' for changes...');
  return dir;
}

/*
 * Initializes Watcher and begins watching
 * a given directory for changes.
 */
function watch (dir) {
  Watcher.createMonitor(dir, (monitor) => {
    monitor.on('changed', (file, current, previous) => {
      console.log('Detected change on: ' + file);
      build();
    });
    monitor.on('created', (file, status) => {
      console.log('New file created: ' + file);
      build();
    });
    monitor.on('removed', (file, status) => {
      console.log(file + ' removed...');
      build();
    });
  });
}

/*
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

/*
 * Initializes this script.  If the watch option
 * was passed, begins watching the appropriate
 * directories for changes.
 */
(function init() {
  build();
  if (Cmd.watch) watch( parseWatch() );
})();