var _ = require("lodash");

module.exports = (config) => {
    var defaultConfig = {
        entry: {
            "wieldo-formly-material": "./src/index.js"
        },
        output: {
            path: "./dist",
            filename: "[name].js",
            library: "wieldoFormlyMaterial",
            libraryTarget: "umd"
        },
        resolve: {
            extensions: ['', '.js', '.html']
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: [/src/],
                query: {
                    presets: ["es2015"]
                }
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                include: [/src/],
                loader: 'html'
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                include: [/src/],
                loaders: ["style", "css", "sass"]
            }]
        }
    };
    return _.merge({}, defaultConfig, config);
}
