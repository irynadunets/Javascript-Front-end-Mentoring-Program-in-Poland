const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
    output: {
    filename: './src/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
     host: 'localhost',
     port: '3000'
   },
  module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
      include: /\.css\.css$/
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
          test: /\.(png|jpg|svg)/,
          loader: 'file-loader',
    options: {
        name: '[path][name].[ext]'
    }
            },
        {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ],
      include: /\.css\.css$/
      }
  ]
},
plugins: [
          new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
          new HtmlWebpackPlugin({template:'./index.html' }),
          new MiniCssExtractPlugin({
              filename: "[name].css",
              chunkFilename: "[id].css"
          })
    ]
}
