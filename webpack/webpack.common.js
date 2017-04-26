const { root } = require('./helpers');
/**
 * This is a common webpack config which is the base for all builds
 */

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: '@ngtools/webpack'},
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  },
  plugins: [

  ]
};
