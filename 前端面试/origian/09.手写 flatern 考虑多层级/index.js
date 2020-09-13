function flat(arr) {
  // 验证 arr 中，还有没有深层数组
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    // 已经是平的了
    return arr
  }
  const res = Array.prototype.concat.apply([], arr)
  return flat(res)
}

const res = flat([1, 2, [3,4], 5])
// 浏览器
var arr = [1, 2, [3,4], 5]
Array.prototype.concat.apply([], arr)
// 类似于
Array.prototype.concat.call([], 1, 2, [3, 4], 5)
// 这样也和这个一样
[].concat(1, 2, [3, 4], 5)
// 但是这样扁平不了
[].concat(1, 2, [3, 4, [10, 20]], 5)
// 扁平不了怎么办呢，就是使用递归