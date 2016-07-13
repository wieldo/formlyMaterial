var _ = require("lodash");
module.exports = (config) => {
    var defaultConfig = {
        entry: {
            "wieldo-formly-material": "./src/index.js"
        },
        output: {
            path: "./lib",
            filename: "[name].js",
            library: "wieldoFormlyMaterial",
            libraryTarget: "umd"
        },
        resolve: {
            extensions: ["", ".js", ".html"]
        },
        externals: {
            angular: "angular"
        },
        babel: {
            presets: ["es2015"]
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: "eslint-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    loader: "html",
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loaders: ["style", "css", "sass"]
                }
            ]
        }
    };
    var definedConfig = _.merge({}, defaultConfig, config);
    return definedConfig;
}
