module.exports = {
  entry: {
    index: './src/index.ts',
    runTeatureTest: './src/runTeatureTest.ts'
  },
  mode: 'production', //development, production
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devtool: 'none',
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