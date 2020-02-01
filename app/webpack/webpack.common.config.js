const path = require("path");
const webpack = require("webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: "./index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node-modules/
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cwd: __dirname,
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "eslint-loader",
        enforce: "pre",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
