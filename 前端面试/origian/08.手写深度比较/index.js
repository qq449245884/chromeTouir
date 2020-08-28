
function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual (obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都 是对象或者数组
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 以 obj1 为基准和 obj2 依次的递归比较
  for (let key in obj1) {
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
  b: { x: 100, y: 200},
  c: 1000
}
// console.log(obj1 === obj2)

console.log(isEqual(obj1, obj2))


