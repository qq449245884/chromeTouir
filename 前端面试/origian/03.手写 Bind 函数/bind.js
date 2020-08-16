function fn1 (a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}



Function.prototype.myBind = function () {
  const args = Array.prototype.slice.call(arguments)
  // 获取 this
  const t = args.shift()
  const self = this

  return function () {
    return self.apply(t, args)
  }
}

const fn = fn1.myBind({x: 400}, 100, 200, 400)
const res = fn()
console.log(res)