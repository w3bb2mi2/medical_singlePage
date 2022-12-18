const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        filename: "static/js/main.js",
        path: path.join(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "static/image/[name][ext]"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash].css"
        })
    ],

    module: {
        rules: [
            
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            

        ],

    }

}