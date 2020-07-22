function mathSequences(arr) {
  let arith = new Set()
  let geo = new Set()
  for (let i = 1; i<arr.length; i++) {
    let num1 = arr[i] - arr[i-1]
    arith.add(num1)

    let num2 = arr[i] / arr[i-1]
    geo.add(num2)
  }
  if (arith.size === 1) {
    return "四则运算";
  }
  if (geo.size === 1) {
    return "几何运算";
  }
  return -1
}

console.log(mathSequences([10,20, 30, 40, 50]));
// '四则运算'
console.log(mathSequences([2, 4, 8, 16]));
// "几何运算"
console.log(mathSequences([2, 5, 14, 89]));
// -1
