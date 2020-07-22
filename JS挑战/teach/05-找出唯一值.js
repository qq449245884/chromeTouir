
// 使用三种方式实现
// 数组  对象   lastIndexOf()
// 不使用 Set 数据结构（单独一节视频）
function unique (str) {
  // let values = []
  // for (let letter of str) {
  //   if (values.indexOf(letter) !== -1) {
  //     return false
  //   }
  //   values.push(letter)
  // }
  // return true;


  // let values = {}
  // for (let letter of str) {
  //   if (values[letter]) {
  //     return false
  //   }
  //   values[letter] = 'exists'
  // }
  // return true


  for (let i = 0; i <str.length; i++) {
    // onsole.log(str.lastIndexOf(str[i]))
    if (str.lastIndexOf(str[i]) !== i) {
      return false
    }
  }
  return true
}

console.log(unique('abcde'))
// true

console.log(unique('abacdefb'))
// false