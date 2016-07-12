var webpack = require("webpack");

module.exports = (node_env) => {
    return require("./"+node_env)();
}
