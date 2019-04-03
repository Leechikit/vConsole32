/**
* @name: vconsole32
* @description: 入口文件
* @author: leechikit
* @update: 2019-04-03
*/

import VConsole from 'vconsole'
import event from './lib/event.js'

class VConsole32 {
  constructor(params = {}) {
    this.params = params
    this.vConsole = new VConsole(Object.assign({}, params, {
      onReady: this.onReady.bind(this)
    }))
  }
  onReady () {
    if (typeof this.params.onReady === 'funciton') {
      this.params.onReady.call(this.vConsole)
    }
    event.init(this.vConsole)
  }
}

export default VConsole32