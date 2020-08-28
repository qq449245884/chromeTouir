const input = document.getElementById('input')
let timer
// input.addEventListener('keyup', function () {
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     console.log(input.value)
//     timer = null
//   }, 1000)
// })

function debounce (fn, delay = 500) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

input.addEventListener('keyup', debounce(function () {
  console.log(input.value)
}, 600))