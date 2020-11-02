const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

const htmlWebpackPlugins = [];

function getEntry() {
  const entry = {};
  glob.sync('./src/page/*/index.js')
    .forEach(filePath => {
      const name = filePath.match(/\/page\/(.+)\/index.js/)[1];
      entry[name] = filePath;
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          filename: `./${name}/${name}.html`,
          template: `./src/page/${name}/${name}.html`,
          chunks: [name],
          minify: {
            collapseWhitespace: false,
            removeComments: false,
            removeRedundantAttributes: false,
            removeScriptTypeAttributes: false,
            removeStyleLinkTypeAttributes: false,
            useShortDoctype: false
          }
        })
      );
    });
  entry.index = './src/index/index.js';
  return entry;
}

module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index/index.html',
      chunks: ['index'],
      minify: {
        collapseWhitespace: false,
        removeComments: false,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: false
      }
    }),
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: './[name]/css/index.css',
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: '3'
            }]
          ],
          plugins: ['@babel/transform-runtime']
        }
      }],
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }]
  },
  externals: {
    jquery: 'jQuery'
  }
}
