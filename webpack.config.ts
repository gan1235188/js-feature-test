module.exports = {
  entry: './src/index.ts',
  mode: 'development', //development, production
  output: {
    path: __dirname,
    filename: 'dist/index.js'
  },
  devtool: 'source-map',
  resolve: {
    // mainFields: ['jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
}