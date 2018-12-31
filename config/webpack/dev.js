require('dotenv').config();
const Path = require('path');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Argv = require('yargs').argv;
const VueLoaderPlugin = require('vue-loader/lib/plugin');


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
      'app': Path.resolve(__dirname, '..', '..', 'dev', 'index.tsx')
    },

    output: {
      filename: '[name].dev.js',
      path: Path.resolve(__dirname, '..', '..', 'dist', 'assets'),
      publicPath: '/assets/'
    },

    mode: 'development',
    
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
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js'
      },
      extensions: [
        '.js', 
        '.jsx', 
        '.ts', 
        '.tsx',
        '.vue',
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
        /** Vue handling */
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
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
            // Commented due to incompatibilities with Vue's single file components.
            // {
            //   loader: 'tslint-loader',
            //   options: {
            //     configFile: Path.resolve(__dirname, '..', 'tslint', 'dev.json'),
            //     failtOnHint: true,
            //     tsConfigfile: Path.resolve(__dirname, '..', '..', 'tsconfig.json')
            //   }
            // }
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
                  '@babel/preset-react',
                  {'modules': false}
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
            // {
            //   loader: MiniCSSExtractPlugin.loader,
            //   options: {}
            // },
            {
              loader: 'style-loader',
              options: {}
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName:'[local]'
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
        filename: '[name].dev.css'
      }),
      new HtmlWebpackPlugin({
        filename: './../index.html',
        template: './dev/views/html/index.hbs',
        title: 'Jon Richards - Frontend Engineer',
        minify: false
      }),
      new Webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin()
    ],

    stats: output_stats
  }

} // end config