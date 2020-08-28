
function createCache () {
  const data = {} // 闭包中的数据，被隐藏，不被外界所访问
  return {
    set: function (key, vale) {
      data[key] = vale
    },
    get: function (key) {
      return data[key]
    }
  }
}

const c = createCache()
c.set('a', 100)
console.log(c.get('a'))