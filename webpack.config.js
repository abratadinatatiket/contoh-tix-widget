const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BASE = {
  entry: {
    'widget.core': './tix-widget/widget.core.js',
    'widget.embed': './tix-widget/widget.embed.js',
    'lime-banner':'./tix-widget/styles/lime-banner.scss',
    'orange-skyscraper':'./tix-widget/styles/orange-skyscraper.scss',
    'pink-square':'./tix-widget/styles/pink-square.scss'
  },
  output:{
    path: path.resolve(__dirname,'dist/tix-widget/'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist/tix-widget/']),
    new MiniCssExtractPlugin({
      //relatif thd output.path di atas
      filename: 'styles/[name].css'
    })
  ],
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      }
    ]
  }
}

module.exports = (env, argv)=>{
  if(argv.mode === 'production'){
    return merge(BASE, {
      output: {
        publicPath: env && env.publicPath ? env.publicPath : 'https://cdn.tiket.com/tix-widget/'
      }
    })
  }

  return merge(BASE, {
    output:{
      publicPath: 'tix-widget/'
    },
    devtool: 'eval-source-map',  
    devServer:{
      contentBase: path.resolve(__dirname, 'dist')
    }
  })
}