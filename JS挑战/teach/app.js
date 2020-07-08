function longestWorld(str) {
  let words = str.split(" ")
  let longestWorld = ''
  for (let word of words) {
    if (word.length > longestWorld.length) {
      longestWorld = word;
    }
  }

  return longestWorld;
}

console.log(longestWorld("I woke up earyly today11111"));
console.log(longestWorld("I went straight to the beach2222"));