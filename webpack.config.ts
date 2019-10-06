module.exports = {
  entry: './src/index.ts',
  mode: 'development', //production
  output: {
    path: __dirname,
    filename: 'dist/index.js'
  },
  devtool: false,
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