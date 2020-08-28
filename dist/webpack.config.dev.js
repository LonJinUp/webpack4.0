"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var optimizeCss = require('optimize-css-assets-webpack-plugin');

var uglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    //优化项
    minimizer: [new uglifyjsPlugin({
      cache: true,
      //是否缓存
      parallel: true,
      //是否并发打包
      sourceMap: true
    }), new optimizeCss()]
  },
  mode: 'production',
  //模式 默认两种 production(生产环境) development(开发环境)
  entry: './src/index.js',
  //入口文件
  //output 出口文件
  output: {
    filename: 'index.[hash:8].js',
    //打包后文件名
    path: path.resolve(__dirname, 'dist') //必须为绝对路径

  },
  plugins: [//数组，里面放着所有的webpack插件
  new HtmlWebpackPlugin({
    template: './src/index.html',
    //指定文件
    filename: 'index.html',
    //输出文件名字
    minify: {
      removeAttributeQuotes: true,
      //删除双引号
      collapseWhitespace: true //折叠空行

    },
    hash: true //避免缓存

  }), new MiniCssExtractPlugin({
    filename: 'main.css'
  })],
  module: {
    //模块
    rules: [//规则 
    //css-loader 解析 @import这种语法
    //style-loader 它是吧css插入到head的标签中
    //loader的特点 希望单一
    //loader的用法 只用一个loader字符串表示
    //如果需要多个，则用数组[]
    //loader顺序是从右到左,从下到上执行
    //loader还可以用对象表示(可以进行传参)
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js' // 这个得在项目根目录创建此文件

          }
        }
      }]
    }, {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js' // 这个得在项目根目录创建此文件

          }
        }
      }, 'less-loader']
    }]
  }
};