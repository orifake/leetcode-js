/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
	for (let i = 0, len = s.length; i < len; i++) {
		const item = s[i];
		if (s.lastIndexOf(item) === s.indexOf(item)) {
			return i;
		}
	}

	return -1;
};