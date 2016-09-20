/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	for (var i = 0, len = s.length; i < len; i++) {
		var item = s[i];
		if (s.lastIndexOf(item) === s.indexOf(item)) {
			return i;
		}
	}

	return -1;
};