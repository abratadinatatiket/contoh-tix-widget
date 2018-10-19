const path = require('path');
const merge = require('webpack-merge');

const BASE = {
  entry: {
    'widget.core': './tix-widget/widget.core.js',
    'widget.embed': './tix-widget/widget.embed.js'
  },
  output:{
    path: path.resolve(__dirname,'dist/tix-widget/'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
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