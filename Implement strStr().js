/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const getPrefix = function (pattern) {
	const prefix = Array.from({ length: pattern.length }, () => -1)
	j = -1
	for (let i = 1; i < pattern.length; i++) {
		while (j > -1 && pattern[j + 1] != pattern[i]) {
			j = prefix[j]
		}
		if (pattern[j + 1] === pattern[i]) {
			j += 1
		}
		prefix[i] = j
	}
	return prefix
}

const KMP = function (text, pattern) {
	const prefix = getPrefix(pattern)
	let j = -1
	for (let i = 0; i < text.length; i++) {
		while (j > -1 && pattern[j + 1] != text[i]) {
			j = prefix[j]
		}
		if (pattern[j + 1] === text[i]) {
			j += 1
		}
		if (j === (pattern.length - 1)) {
			return i - j
		}
	}
	return -1
}

const strStr = function (haystack, needle) {
	if (!needle) return 0
	return KMP(haystack, needle)
};

console.log(strStr("mississippi", "pi"))