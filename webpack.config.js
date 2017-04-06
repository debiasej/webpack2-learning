const path = require('path'); // We can use whatever nodejs package
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //./build
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: '/\.js$/'
      },
      {
        //use: ['style-loader', 'css-loader'], // it's apply from right to left
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }), // legacy way
        test: /\.css$/
      },
      {
        // Remember: loaders are applied from right to left
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          {
            loader:'image-webpack-loader',
            options: {} // workaround
        }],
        test: /\.(jpe?g|png|gif|svg)$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
