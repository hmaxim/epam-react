const merge = require("webpack-merge");

module.exports = merge(require("./webpack.common.config"), {
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minSize: 0,
          minChunks: 2
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  watch: false
});
