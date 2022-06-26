/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function (pattern, str) {
	const lookup = {}
	const words = str.split(' ')
	if (pattern.length !== words.length) {
		return false
	}
	for (let i = 0; i < pattern.length; i++) {
		let key = pattern[i]
		let word = words[i]
		let char_key = `char_${key}`
		let char_word = `word_${word}`

		if (!lookup.hasOwnProperty(char_key)) {
			lookup[char_key] = i
		}
		if (!lookup.hasOwnProperty(char_word)) {
			lookup[char_word] = i
		}
		if (lookup[char_key] !== lookup[char_word]) {
			return false
		}
	}
	return true
};

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))