function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b
  })
  let largest = tempArr.pop()
  let total = 0
  tempArr.forEach(item => total += item)
  return largest === total
}


console.log(ArraySum([1, 6, 4, 2, 13]))
//return true  1+2+4+6=13  13=13
console.log(ArraySum([1, 2, 4, 34, 22]))
// return false 1+2+4+22=29  29!=34