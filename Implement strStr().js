/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	let len1 = haystack.length;
	let len2 = needle.length;

	if (len2 === 0) {
		return 0;
	}
	if (len1 === 0 || len1 < len2) {
		return -1;
	}
	for (let i = 0; i <= len1 - len2; i++) {
		if (haystack.substring(i, i + len2) === needle) {
			return i;
		}
	}
	return -1;
};