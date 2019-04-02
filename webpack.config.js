const Path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    vconsole32 : Path.resolve(__dirname, './src/vconsole32.js')
  },
  output: {
    path: Path.resolve(__dirname, './dist'),
    filename: '[name].min.js'
  }
}