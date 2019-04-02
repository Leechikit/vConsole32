/**
* @name: event
* @description: 三指连点两次打开调试台事件
* @author: leechikit
* @update:
*/
export default {
  init (vConsole) {
    const THRESHOLD = 50
    const FINGER = 3
    let startTouchesX = []

    vConsole.hideSwitch()

    window.addEventListener('touchstart', e => {
      const touches = e.touches
      if (touches.length === FINGER) {
        startTouchesX = []
        Array.prototype.slice.call(touches).forEach(touch => {
          startTouchesX.push(touch.pageX)
        })
      }
    })

    window.addEventListener('touchend', e => {
      const touches = e.changedTouches
      if (touches.length === FINGER && startTouchesX.length === FINGER) {
        let isShow = true
        let index = 0
        while (index < touches.length) {
          if (startTouchesX[index] - touches[index].pageX > THRESHOLD) {
            isShow = false
            break
          }
          index++
        }
        if (isShow === true) {
          vConsole.show()
        }
      }
    })
  }
}