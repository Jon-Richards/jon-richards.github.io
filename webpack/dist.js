require('dotenv').config();
const Path = require('path');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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
      'app': [
        Path.resolve(__dirname, '..', 'dev', 'app', 'index.tsx')
      ]
    },

    output: {
      filename: '[name].dist.js',
      path: Path.resolve(__dirname, '..', 'dist', 'js'),
      publicPath: '/assets/'
    },

    mode: 'production',
    
    devtool: 'source-map',

    devServer: {
      contentBase: Path.resolve(__dirname, '..', 'dist'),
      port: 3000,
      hot: true,
      index: 'index.html',
      overlay: true,
      stats: output_stats,
      writeToDisk: true
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
      ],
      alias: {
        // MUST be relative to this file.
        'scss-standards': Path.resolve(__dirname, '..', 'dev', 'app', 'config', 'scss', 'index.scss'),
        'Action_creators': Path.resolve(__dirname, '..', 'dev', 'app', 'action_creators'),
        'Config': Path.resolve(__dirname, '..', 'dev', 'app', 'config'),
        'Lib': Path.resolve(__dirname, '..', 'dev', 'app', 'lib'),
        'Store': Path.resolve(__dirname, '..', 'dev', 'app', 'store'),
        'Views': Path.resolve(__dirname, '..', 'dev', 'app', 'views'),
      }
    },

    module: {
      rules: [
        /**
         * Vanilla JS Handling
         */
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env'
                ]
              }
            }
          ]
        },
        /**
         * Typescript Handling
         */
        {
          test: /\.(ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              loader: 'ts-loader',
              options: {}
            },
            {
              loader: 'tslint-loader',
              options: {
                configFile: Path.resolve(__dirname, '..', 'tslint.json'),
                failtOnHint: true,
                tsConfigfile: Path.resolve(__dirname, '..', 'tsconfig.json')
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
                modules: true, // use exportOnlyLocals (see docs)
                exportOnlyLocals: true,
                localIdentName: '[name]__[local]__[hash:base64:5]',
                sourceMap: false
              } 
            },
            {
              loader: 'postcss-loader',
              options: { // emulates a postcss.config.js file
                plugins: [
                  require('autoprefixer')
                ]
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
                name: '../img/[name].[ext]'
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
                name: '../font/[name].[ext]'
              }
            }
          ]
        }
      ]
    }, // end module

    plugins: [
      new CleanWebpackPlugin(
        [
          './dist'
        ],
        {
          root: Path.resolve(__dirname, '..'),
          dry: Argv.clean ? false : true
        }
      ),
      new StyleLintPlugin({
        emitErrors: false
      }),
      new OptimizeCSSAssetsPlugin({
        cssPreprocessor: require('cssnano'),
        cssPreprocessorPluginOptions: {
          preset: ['default', {discardComments: { removeAll: true } }]
        }
      }),
      new MiniCSSExtractPlugin({
        filename: '../css/[name].dist.css'
      }),
      new HtmlWebpackPlugin({
        filename: './../index.html',
        template: './dev/document/index.hbs',
        minify: {
          collapseWhitespace: true
        },
        inlineSource: '.(js|css)$'
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new Webpack.HotModuleReplacementPlugin()
    ],

    stats: output_stats
  }

} // end config