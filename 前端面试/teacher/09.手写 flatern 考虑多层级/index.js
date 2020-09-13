function flat(arr) {
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }
  const res = Array.prototype.concat.apply([], arr)
  return flat(res)
}

const res = flat([1, 2, [3,4, [10, 11, [111, 11112, 333, [444, 333, [55, 111, [1111]]]]]], 5])
