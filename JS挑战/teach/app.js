

function checkPalindrome (str) {
  // str = str.toLowerCase()
  // let first = str.split(' ').join('')
  // let second = first.split('').reverse().join('')
  // console.log(second)
  // return second === first

  let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase()
  let second = tempStr.split('').reverse().join('')
  console.log(tempStr === second)
}

console.log(checkPalindrome('Was it a car or a cat I saw'))
// true

console.log(checkPalindrome('Red - rum-, sir,-is-murder'))
// true

console.log(checkPalindrome('I got up early this morning'))