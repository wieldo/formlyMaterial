require("argv-set-env")();
var webpack = require("./webpack")(process.env.NODE_ENV);
module.exports = webpack;
