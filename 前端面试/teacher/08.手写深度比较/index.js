// 判断是否是对象或数组
function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
function isEqual (obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型(当然这里一般不会是函数)
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，而且不相等
  //1.先取 obj1 和 obj2 的 keys，比较个数
  const objKeys1 = Object.keys(obj1)
  const objKeys2 = Object.keys(obj2) // 演示一下 Object.keys([10, 20, 30])
  if (objKeys1.length !== objKeys2.length) {
    return false
  }
  // 以 obj1 为基准 和 obj2 依次递归比较
  for (let key in obj1) {
    // 比较当前 key 的 val
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  return true
}

const obj1 = {
  a: 100,
  b: { x: 100, y: 200}
}
const obj2 = {
  a: 100,
  b: { x: 100, y: 200}
}
// console.log(obj1 === obj2)
console.log(isEqual(obj1, obj2))

