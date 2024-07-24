/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const keyboard = 'qwertyuiopasdfghjklzxcvbnm'
  let result = []
  for (let word of words) {
    if (word.length === 1) {
      result.push(word)
      continue
    }
    let prev = -1
    let curr = -1
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      const index = keyboard.indexOf(char.toLocaleLowerCase())
      if (index < 10) {
        curr = 0
      } else if (index < 19) {
        curr = 1
      } else {
        curr = 2
      }

      if (i === 0) {
        prev = curr
      } else if (prev !== curr) {
        break
      } else if (i === word.length - 1) {
        result.push(word)
      }
    }
  }
  return result
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))