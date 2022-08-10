const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const loader = require("ts-loader");
module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    //babel loader
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": "88",
                                        },
                                        "corejs": 3,
                                        "useBuiltIns": "usage",
                                    }
                                ]
                            ]
                        }
                    },
                    //ts-loader
                    {loader: 'ts-loader'}],
                exclude: /node-modules/
            },
            //less loader
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //css compatibility for older browsers
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {browser: "last 2 versions"}
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader',
                ]
            }

        ]
    },
//plugins
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        // new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    performance: {
        hints: false,
    }
}