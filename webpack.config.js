const path = require("path")

module.exports = {
    mode: "development",
    devtool:"source-map",
    entry: "./main.js",
    output:{
        filename:"main.js",
        path: path.join(__dirname, "dist")
    }
}