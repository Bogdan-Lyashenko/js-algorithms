var port = process.env.PORT || 3000;

module.exports = {
  entry: './src/hash-table/index',
  devtool: 'source-map',
  output: {
    path: './dist/',
    filename: "./index.js"
  },
  
  devServer: {
    inline: true,
    contentBase: './dist/',
    port: port
  },
  
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};