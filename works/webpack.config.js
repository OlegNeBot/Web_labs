const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
// eslint-disable-next-line import/no-unresolved
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    fio: path.resolve(__dirname, './build/lab1/indx.js'),
    vyatsu: path.resolve(__dirname, './build/lab1/vyatsu.js'),
    form: path.resolve(__dirname, './build/lab2/form.js'),
    regform: path.resolve(__dirname, './build/practice2/email-form.js'),
    dashboard: path.resolve(__dirname, './lab4/index.js'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        }],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
        use: {
          loader: 'url-loader', // this need file-loader
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  devServer: {
    proxy: 'https://new.vyatsu.ru',
  },
};
