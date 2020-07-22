function longestWorld(str) {
  let words = str.split(" ");
  let size = 0
  let max = ['']

  for (let i=0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length
      if (max[max.length-1].length < words[i].length) {
        max = []
        max.push(words[i])
      } else {
        max = [...max, words[i]]
      }
    }
  }

  return max
}

console.log(longestWorld("I woke up early today"));
console.log(longestWorld("I went straight to then beach"));
