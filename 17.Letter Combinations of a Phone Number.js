/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
	1: ['', ''],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
};


const letterCombinations = function (digits) {
	let len = digits.length
	let result = []
	if (!len) return []
	const dfs = (pos, str) => {
		if (pos === len) {
			result.push(str)
		} else {
			let letters = map[digits[pos]]
			for (let i = 0; i < letters.length; i++) {
				dfs(pos + 1, str + letters[i])
			}
		}
	}
	dfs(0, "")
	return result
}

console.log(letterCombinations("23"))