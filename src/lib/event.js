/**
* @name: event
* @description: 三指连点两次打开调试台事件
* @author: leechikit
* @update:
*/

export default {
  init (vConsole) {
    const FINGER = 3
    const DURATION = 500
    let counter = 0
    let timer = null

    vConsole.hideSwitch()

    window.addEventListener('touchstart', e => {
      const touches = e.touches
      if (touches.length === FINGER) {
        counter++
        timer = setTimeout(() => {
          counter = 0
          clearTimeout(timer)
          timer = null
        }, DURATION)
      }
    })

    window.addEventListener('touchend', e => {
      if (counter === 3) {
        vConsole.show()
        counter = 0
        clearTimeout(timer)
        timer = null
      }
    })
  }
}