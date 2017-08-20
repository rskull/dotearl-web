const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const extractCSS = new ExtractTextPlugin('style.css');

const config = {
  entry: [APP_DIR + '/index.js', APP_DIR + '/style.css'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    port: 8080,
  },
  plugins: [
    extractCSS
  ],
};

module.exports = config;

