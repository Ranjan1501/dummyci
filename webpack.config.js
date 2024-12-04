const path = require('path');

module.exports = {
  // ... other configuration options
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};