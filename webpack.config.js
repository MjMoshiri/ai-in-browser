const path = require('path');

module.exports = {
  entry: './src/background.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'background.js' 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
