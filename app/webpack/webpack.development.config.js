const path = require("path");
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common.config'), {
    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: {
            index: '/'
        }
    },
    watch: true
});