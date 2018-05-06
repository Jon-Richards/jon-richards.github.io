const Path = require('path');

module.exports = {
  mode: 'production',
  stats: 'verbose',

  /*
   * Overwritten by the JS compiler.
   * SEE compiler-config.js
   */
  // devtool: 'source-map',
  // entry: './src/javascript/typescript/app.ts',
  // output: {
  //   path: Path.resolve(__dirname, 'prod', 'assets', 'js'),
  //   filename: 'app.js'
  // },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  
}