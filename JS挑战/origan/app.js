
function checkPalindrome (str) {
  let temStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase()
  let second = temStr.split('').reverse().join('')
  return temStr === second
}

console.log(checkPalindrome('Was it a car or a cat I saw'))
// true

console.log(checkPalindrome('Red - rum-, sir,-is-murder'))
// true

console.log(checkPalindrome('I got up early this morning'))
// false