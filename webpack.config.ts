module.exports = {
  entry: './index.ts',
  mode: 'production',
  output: {
    path: __dirname,
    filename: 'dist/test.js'
  },
  devtool: false,
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.js']
  },
  target: 'node',
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