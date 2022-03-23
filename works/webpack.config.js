const path = require('path');
// eslint-disable-next-line import/no-unresolved
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    fio: path.resolve(__dirname, './build/lab1/indx.js'),
    vyatsu: path.resolve(__dirname, './build/lab1/vyatsu.js'),
    form: path.resolve(__dirname, './build/lab2/form.js'),
    pstmn: path.resolve(__dirname, './build/lab3/postman.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devServer: {
    // proxy: 'https://localhost:3000',
    proxy: 'https://new.vyatsu.ru',
  },
};
