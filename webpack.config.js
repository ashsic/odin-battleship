const path = require('path');

module.exports = {
  entry: './src/gameloop.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};