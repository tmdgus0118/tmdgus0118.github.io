const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve : {
    extensions : ['.js','.json', '.ts', '.tsx']
  },
  module: {
    rules : [{
      test : /\.(ts|tsx)$/,
      loader:'awesome-typescript-loader'
    }]
  }
};