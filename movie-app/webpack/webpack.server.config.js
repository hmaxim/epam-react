const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './server/express.js',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node-modules/
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cwd: __dirname
        }
      }
    ]
  },
  externals: [nodeExternals()]
};
