const path = require('path'); // We can use whatever nodejs package

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //./build
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: '/\.js$/'
      }
    ]
  }
};

module.exports = config;
