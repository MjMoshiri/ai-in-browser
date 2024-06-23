const path = require('path');

module.exports = {
  entry: './background.js', // Path to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js' // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all JavaScript files
        exclude: /node_modules/, // Do not transpile node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader to use Babel with Webpack
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
