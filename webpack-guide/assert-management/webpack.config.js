const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    print: './src/print.js',
    app: './src/index.js',
    math: './src/math.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './out',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['out']),
    new HtmlWebpackPlugin({
      title: 'assert management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'out')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

