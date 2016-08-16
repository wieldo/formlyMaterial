module.exports = require("./common")({
    entry: "./test/index.js",
    output: {
        filename: "[name].test.js"
    }
});
