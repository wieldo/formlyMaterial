var webpack = require("webpack");
var packagejson = require("../package.json");

module.exports = () => {
    return require('./common')({
        output: {
          filename: '[name].js'
        }
    });
}
