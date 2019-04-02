/**
* @name: event
* @description: 三指连点两次打开调试台事件
* @author: leechikit
* @update:
*/
import vConsole from 'vconsole'

let times = 1
let lastTapTime = null
let isShow = false
vConsole.hide()

window.addEventListener("touchend", function (e) {
  var nowTime = new Date()
  var touches = e.touches.length

  if (times === 1) {
    times++
    lastTapTime = nowTime

    setTimeout(function () {
      times = 1
    }, 1000)
    return
  }

  if (touches === 2 && times === 2 && (nowTime - lastTapTime < 1000)) {
    if (isShow === false) {
      vConsole.show()
    } else {
      vConsole.hide()
    }
    isShow = !isShow
    times = 1
  }
})