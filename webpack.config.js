const Path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    vconsole32 : Path.resolve(__dirname, './src/vconsole32.js')
  },
  output: {
    path: Path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
    library: 'VConsole32',
    libraryTarget: 'umd',
    libraryExport: "default",
    umdNamedDefine: true
  }
}