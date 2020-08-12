
const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'xiamen'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = obj1
const obj2 = deepClone(obj1)

obj2.address.city = 'beijing'

console.log(obj1.address.city)

function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result  // 初始化结果
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}