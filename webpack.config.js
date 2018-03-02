module.exports = {
  devtool: 'inline-source-map',
  entry: './app/app.js',
  output: {
      filename: './public/bundle/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        exclude: /(bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
