const Path = require('path');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {    
  entry: {
    'app': Path.resolve(__dirname, '..', 'src', 'ts', 'app.tsx')
  },

  output: {
    filename: '[name].dev.js',
    path: Path.resolve(__dirname, '..', 'prod', 'assets'),
    publicPath: '/assets/'
  },

  mode: 'development',
  
  devtool: 'source-map',

  devServer: {
    contentBase: Path.resolve(__dirname, '..', 'prod'),
    port: 3000,
    hot: true,
    index: 'index.html',
    overlay: true,
    stats: {
      children: false
    }
  },

  resolve: {
    extensions: [
      '.js', 
      '.jsx', 
      '.ts', 
      '.tsx', 
      '.css', 
      '.scss', 
      '.sass', 
      '.html', 
      '.hbs', 
      '.handlebars', 
      '.ejs',
      '.png',
      '.jpg',
      '.gif',
      '.svg',
      '.otf',
      '.ttf',
      '.woff'
    ]
  },

  module: {
    rules: [
      /**
       * Typescript Handling
       */
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'ts-loader',
            options: {}
          }
        ]
      },
      /**
       * JSX Handling
       */
      { 
        test: /\.jsx$/,
        use: [
          {
            loader: '@babel/babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.(hbs|handlebars)$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {}
          }
        ]
      },
      /**
       * CSS Handling
       */
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName:'[name]__[local]'
            } 
          },
          {
            loader: 'resolve-url-loader',
            options: {}
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      /**
       * Image Handling
       */
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]'
            }
          }
        ]
      },
      /**
       * Font Handling
       */
      {
        test: /\.(ttf|otf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './font/[name].[ext]'
            }
          }
        ]
      }
    ]
  }, // end module

  plugins: [
    new CleanWebpackPlugin(
      [
        './prod/assets',
        './prod/index.html'
      ],
      {
        root: Path.resolve(__dirname, '..'),
      }
    ),
    new MiniCSSExtractPlugin({
      filename: '[name].dev.css'
    }),
    // new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './../index.html',
      template: './src/html/index.hbs',
      minify: false
    })
  ],

  stats: {
    children: false,
    chunks: false,
    hash: false,
    version: false,
    modules: false,
    timings: false
  }

} // end config