export default {
  formatTime: date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },
  formatNumber: n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  /*函数节流*/
  throttle: (fun, interval) => {
    let enterTime = 0//触发的时间
    let gapTime = interval || 300//间隔时间，如果interval不传，则默认300ms
    return () => {
      let context = this
      let backTime = new Date() //第一次函数return即触发的时间
      if (backTime - enterTime > gapTime) {
        fun.call(context, arguments)
        enterTime = backTime //赋值给第一次触发的时间，这样就保存了第二次触发的时间
      }
    }
  },
  /*函数防抖*/
  debounce: (fun, interval) => {
    let timer
    let gapTime = interval || 1000 //间隔时间，如果interval不传，则默认1000ms
    return () => {
      clearTimeout(timer)
      let context = this
      let args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
      timer = setTimeout(() => {
        fun.call(context, args)
      }, gapTime)
    }
  }
}
