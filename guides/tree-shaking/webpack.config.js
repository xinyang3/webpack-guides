const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    math: './src/math.js'
  },
  // 开发环境下找到错误、警告位置
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './out',
    hot: true
  },
  plugins: [
    // 打包前 清理out文件夹
    new CleanWebpackPlugin(['out']),
    // 重新生成index.html
    new HtmlWebpackPlugin({
      title: 'tree shaking'
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

