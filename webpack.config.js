const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    core: path.resolve(__dirname, 'src', 'core.ts')
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  plugins: [
    new MiniCSSExtractPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.scss']
  },
  stats: {
    assets: true,
    env: true,
    errors: true,
    preset: 'none',
    timings: true,
    warnings: true
  },
}

