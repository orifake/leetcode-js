/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	let start = 0
	let end = s.length - 1
	const VOWELS = new Set(["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"])
	const result = [...s]
	while (start < end) {
		if (!VOWELS.has(result[start])) {
			start++
		}
		if (!VOWELS.has(result[end])) {
			end--
		}
		if (VOWELS.has(result[start]) && VOWELS.has(result[end])) {
			[result[start], result[end]] = [result[end], result[start]]
			start++
			end--
		}
	}
	return result.join("")
}
