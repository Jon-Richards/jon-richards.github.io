const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

/* eslint max-lines-per-function: "off" */
module.exports = (env, argv) => ({
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
                localIdentName: argv.mode === 'development'
                  ? '[local]-[hash:base64:5]'
                  : '[hash:base64:8]'
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              warnRuleAsWarning: true
            },
          },
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
    new MiniCSSExtractPlugin(),
    new ESLintPlugin({
      extensions: ["ts"]
    }),
    new Dotenv()
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
  }
});

