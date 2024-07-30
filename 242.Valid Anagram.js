/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}
	const counter = {}
	for (let c of s) {
		counter[c] = (counter[c] || 0) + 1;
	}
	for (let c of t) {
		if (!counter[c]) return false;
		counter[c]--;
	}
	return true;
};