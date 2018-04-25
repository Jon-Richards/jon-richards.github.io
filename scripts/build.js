#!/usr/bin/env node

const Path = require('path');
const Cmd = require('commander');
const Webpack = require('Webpack');
const WebpackConfig = require('./../webpack.config.js');

/*
 *  Parameters
 */
Cmd
  .option('-j, --javascript', 'Build Javascript')
  .option('-c, --css', 'Build CSS')
  .parse(process.argv);

/*
 *  Instantiates Webpack, applies the
 *  config and runs a build.
 *
 *  For callback configuration options, see: 
 *  https://github.com/webpack/docs/wiki/node.js-api
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
 *  Builds CSS
 */
function build_css() {
  console.log('Build CSS!');
}

/*
 *  Parses options and executes the proper functions.
 */
(function init() {
  if (Cmd.javascript) build_js();
  if (Cmd.css) build_css();
})();