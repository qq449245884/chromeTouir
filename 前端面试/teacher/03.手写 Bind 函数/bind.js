function fn1 (a, b) {
  console.log('this', this)
  console.log(a, b)
  return 'this is fn1'
}

const fn = fn1.bind({x: 100}, 10, 20)
const res = fn()
console.log(res)

// Function.prototype.bind

Function.prototype.myBind = function () {
  // 将参数拆解成数组
  const args = Array.prototype.slice.call(arguments)
  // 获取 this （数组的第一项）
  const t = args.shift()
  const self = this
  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }

}