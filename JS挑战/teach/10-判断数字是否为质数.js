// 质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。
function isPrime(num) {
  if (num < 2) {
    return false
  }

  let root = Math.ceil(Math.sqrt(num))
  // console.log(root)
  // 上述判断方法，明显存在效率极低的问题。对于每个数n，其实并不需要从2判断到n-1，我们知道，一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于sqrt(n)，一个大于等于sqrt(n)，据此，上述代码中并不需要遍历到n-1，遍历到sqrt(n)即可，因为若sqrt(n)左侧找不到约数，那么右侧也一定找不到约数。
  for (let i=2; i<=root; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(8))
// false
console.log(isPrime(11))
// true
console.log(isPrime(121))
// false

console.log(isPrime(127))
// false