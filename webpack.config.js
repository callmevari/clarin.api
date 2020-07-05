const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    bundle: './src/client/homepage.js',
  },
  devtool: isDevelopment ? 'inline-sourcemap' : false,
  mode: process.env.NODE_ENV,
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = config;