/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const halfIsom = function (s, t) {
	const lookup = {}
	for (let i = 0; i < s.length; i++) {
		if (!lookup.hasOwnProperty(s[i])) {
			lookup[s[i]] = t[i]
		} else if (lookup[s[i]] !== t[i]) {
			return false
		}
	}
	return true
}

const isIsomorphic = function (s, t) {
	if (s.length !== t.length) {
		return false
	}
	return halfIsom(s, t) && halfIsom(t, s)
};