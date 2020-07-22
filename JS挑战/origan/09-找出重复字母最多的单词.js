// 返回重复次数最多的
// 如果有多个重复次数一样的，刚返回第一个
// 如果有没有重复，则返回 -1

function testRepeat(arr) {
  let max = 1
  let position = 1
  let value = -1
  let tempNumbers = arr.reduce((acc, curr, index) => {
    // acc[curr] = acc[curr] + 1 || 1
    acc[curr] = acc[curr] ? {...acc[curr], amount: acc[curr]['amount'] + 1} : {amount:1, index}

    let amount = acc[curr].amount
    let place = acc[curr].index
    if (amount > max || (amount === max && place < position && amount > 1)) {
      max = amount
      value = curr
      position = place
    }
    return acc
  }, {})

  return value
}

console.log(testRepeat([5, 2, 2, 1, 5]))
//5

console.log(testRepeat([6, 5, 5, 10, 10, 10]))
// 10

console.log(testRepeat([3, 4, 1, 6, 10]))
// -1
