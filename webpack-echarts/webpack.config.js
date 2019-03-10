const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    index: './src/main.js',
    // another: './src/another-module.js'
  },
  // 开发环境下找到错误、警告位置
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // 打包前 清理out文件夹
    new CleanWebpackPlugin(['dist']),
    // 重新生成index.html
    new HtmlWebpackPlugin({
      title: 'webpack-echarts',
      filename: 'index.html',
      template:'./src/index.html',//模板路径
      inject: true, //是否自动在模板文件添加 自动生成的js文件链接
      minify:{
          removeComments:true //是否压缩时 去除注释
      }
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // })，
    // new Visualizer({filename: './statics.html'}),
    // new BundleAnalyzerPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //  name: 'manifest'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    new webpack.HashedModuleIdsPlugin(),
    
    new CopyWebpackPlugin([ // 复制插件
      {
        from: path.join(__dirname,'./static/*'),
       to:  path.join(__dirname,'/dist/')
      }
    ])

  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

