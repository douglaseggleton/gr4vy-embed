// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            exclude: /node_modules/,
          },
        },
      },
    ],
  },
  output: {
    filename: 'gr4vy-embed.js',
    path: path.resolve('./lib'),
    libraryTarget: 'umd',
    library: 'gr4vy',
  },
  entry: path.resolve('./src'),
}
