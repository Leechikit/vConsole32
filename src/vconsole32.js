import VConsole from 'vconsole'
import event from './lib/event.js'

const vConsole = new VConsole({
  onReady() {
    event.init(vConsole)
  }
})