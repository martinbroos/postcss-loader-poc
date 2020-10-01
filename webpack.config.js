const path = require("path"),
    HTMLWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

const sassOptions = {
    includePaths: [path.resolve(__dirname, "node_modules")]
};

module.exports = {
    entry: {
        app: path.join(__dirname, "src/app.js"),
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: sassOptions
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html")
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ]
};
