/**
 * 用于判断传入的十六进制颜色值的亮度
 * @param color #ffffff
 * @returns {boolean}
 */
export const isDarkColor = (color) => {
  const hex = color.substring(1) // 去掉 "#" 字符
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255 // 计算相对亮度
  return luminance <= 0.5
}

// size=5，要分割的长度
export const cutArray = (arr, size) => {
  const arrNum = Math.ceil(arr.length / size, 10) // Math.ceil()向上取整的方法，用来计算拆分后数组的长度
  let index = 0 // 定义初始索引
  let resIndex = 0 // 用来保存每次拆分的长度
  const result = []
  while (index < arrNum) {
    result[index] = arr.slice(resIndex, size + resIndex)
    resIndex += size
    index++
  }
  return result
}

// 防抖函数
export const debounce = (fn, interval) => {
  let timer
  let delay = interval || 1000 // 间隔的时间，如果interval不传，则默认1秒
  return function () {
    let that = this
    let args = arguments // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(that, args) // 用apply指向调用debounce的对象，相当于this.fn(args);
    }, delay)
  }
}

// 节流函数
export const throttle = (fn, interval) => {
  let enterTime = 0 //触发的时间
  let gapTime = interval || 300 //间隔时间，如果interval不传，则默认300ms
  return function () {
    let context = this
    let backTime = new Date() //第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments)
      enterTime = backTime //赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  }
}
