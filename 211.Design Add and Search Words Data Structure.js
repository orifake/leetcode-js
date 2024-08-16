
const WordDictionary = function () {
  this.wordsSet = new Set()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.wordsSet.add(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  for (const savedWord of this.wordsSet) {
    if (savedWord.length !== word.length) continue

    let wordsMatch = true
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== '.' && savedWord[i] !== word[i]) {
        wordsMatch = false
        break;
      }
    }
    if (wordsMatch) return true
  }
  return false
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */