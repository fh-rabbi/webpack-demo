const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // filename: 'bundle.js',
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer:{
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true, // for open automatically in browser
        compress: true, // for gzip compress
        historyApiFallback: false
    },
    module: {
    rules: [
    /*      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },*/
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
          test: /\.(png|jpg|jpeg:gif)$/,
          type: 'asset/resource'
      }
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tmp.html',
            filename: 'index.html', // output file name
            title: 'My App', // HTML title
            minify: {
                 collapseWhitespace: true // minify the output HTML
            }
        }),
        /*
            Added the CommonsChunkPlugin 
            to extract the common modules 
            from both bundles into a separate 
            vendor.js file. This file will 
            be included in the HTML file before 
            the other bundles, so that it can 
            be cached independently.
        */
        /*new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        })      */
    ]  
};