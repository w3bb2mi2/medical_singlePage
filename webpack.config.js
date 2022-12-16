const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development"
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "sourse=map" : undefined;
module.exports = {
    mode,
    target,
    devtool,
    mode: "development",
    devtool: "source-map",
    entry: "./main.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist", "static", "js"),
        clean: true
    },
    plugins:[new HtmlWebpackPlugin(
        {template: path.resolve(__dirname, "index.html")}
    ),
    ]
}