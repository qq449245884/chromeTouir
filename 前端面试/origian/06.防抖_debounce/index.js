const input = document.getElementById('input')

let timer
input.addEventListener('keyup', function () {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    console.log(input.value)
    // 清空定时器
    timer = null
  }, 500)
})

function debounce (fn, delay = 500) {
  // timer 是在闭包中的
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

input.addEventListener('keyup', debounce(function (){
  console.log(input.value)
}), 600)