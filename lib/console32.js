import vConsole from 'vconsole'

class Console32 {
  constructor() {
    this._version = '0.0.1'
    this._times = 1
    this._lastTapTime = null
    this.hideButton()
    this.eventBind()
  }
  hideButton () {
    vConsole.hideSwitch()
  }
  eventBind () {
    // 三指连点两次打开调试台
    window.addEventListener("touchend", function (e) {
      var nowTime = new Date()
      var touches = e.touches.length

      if (this._times === 1) {
        this._times++
        this._lastTapTime = nowTime

        setTimeout(function () {
          this._times = 1
        }, 1000)
        return
      }

      if (touches === 2 && this._times === 2 && (nowTime - this._lastTapTime < 1000)) {
        if (this._container.style.display == "none") {
          vConsole.show()
        } else {
          vConsole.hide()
        }

        this._times = 1
      }
    })
  }
}

export default Console32