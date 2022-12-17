const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const mode = process.env.NODE_ENV || "development";
console.log(mode)
const devMode = mode === "development"
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
console.log(devtool)
module.exports = {
    mode,
    target,
    devtool,
    
    entry: "./main.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist", "static", "js"),
        clean: true
    },
    plugins:[new HtmlWebpackPlugin(
        {template: path.resolve(__dirname, "index.html")},
        
    )
    ],
    module:{
        rules:[
            {
                test:/\.html$/i,
                loader:"html-loader"
            }
        ]
    }
    
}