/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length !== t.length) {
		return false;
	}
	for (var i = 0; i < s.length; i++) {
		var index = t.indexOf(s[i]);
		if (index > -1) {
			t = t.substring(0, index) + t.substring(index + 1);
		} else {
			return false;
		}
	}
	return true;
};