const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './app/index.js',
        second: './app/second.js'
    },
    mode: 'development',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: "index.html",
            title: 'one',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: 'subPage.html',
            filename: "subPage.html",
            title: 'two',
            chunk: ['second']
        })
    ],
    module:{
        rules:[
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'data')
        },
        port: 65500,
        compress: true
    }
}