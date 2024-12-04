import path  from 'path';

module.exports = {
  // ... other configuration options
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};