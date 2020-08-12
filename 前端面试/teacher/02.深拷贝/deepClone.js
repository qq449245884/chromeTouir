const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'xiamen'
  },
  arr: ['a', 'b', 'c']
}


const obj2 = deepClone(obj1)

obj2.address.city = 'beijing'
obj2.arr.push('d')
obj2.arr.push('e')

console.log(obj1.arr)

function deepClone (obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}