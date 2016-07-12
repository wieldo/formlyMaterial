var webpack = require("webpack");
var packagejson = require("../package.json");

module.exports = () => {
    return require('./common')({
        output: {
          filename: '[name].min.js'
        },
        devtool: 'source-map',
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            })
        ]
    });
}
