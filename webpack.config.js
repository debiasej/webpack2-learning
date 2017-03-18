const path = require('path'); // We can use whatever nodejs package

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //./build
    filename: 'bundle.js'
  }
};

module.exports = config;
