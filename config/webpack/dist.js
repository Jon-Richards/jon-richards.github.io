require('dotenv').config();
const Path = require('path');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Argv = require('yargs').argv;


/** Console output settings. */
const output_stats = {
  children: false,
  chunks: false,
  hash: false,
  version: false,
  modules: false,
  timings: false
}


module.exports = env => {
  return {    
    entry: {
      'app': Path.resolve(__dirname, '..', '..', 'dev', 'views', 'components', 'app', 'app.tsx')
    },

    output: {
      filename: '[name].dist.js',
      path: Path.resolve(__dirname, '..', '..', 'dist', 'assets'),
      publicPath: '/assets/'
    },

    mode: 'production',
    
    devtool: 'source-map',

    devServer: {
      contentBase: Path.resolve(__dirname, '..', '..', 'dist'),
      port: 3000,
      hot: true,
      index: 'index.html',
      overlay: true,
      stats: output_stats
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
          enforce: 'pre',
          use: [
            {
              loader: 'ts-loader',
              options: {}
            },
            {
              loader: 'tslint-loader',
              options: {
                configFile: Path.resolve(__dirname, '..', 'tslint', 'dist.json'),
                failtOnHint: true,
                tsConfigfile: Path.resolve(__dirname, '..', '..', 'tsconfig.json')
              }
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
          './dist/assets',
          './dist/index.html'
        ],
        {
          root: Path.resolve(__dirname, '..', '..'),
          dry: Argv.clean ? false : true
        }
      ),
      new MiniCSSExtractPlugin({
        filename: '[name].dist.css'
      }),
      new HtmlWebpackPlugin({
        filename: './../index.html',
        template: './dev/views/html/index.hbs',
        minify: true
      }),
      new Webpack.HotModuleReplacementPlugin()
    ],

    stats: output_stats
  }

} // end config