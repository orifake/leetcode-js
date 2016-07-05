/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var len = strs.length,
		i, j;
	if (len === 0) {
		return "";
	}

	for (i = 0; i < strs[0].length; i++) {
		for (j = 1; j < len; j++) {
			if (strs[j].charAt(i) !== strs[0].charAt(i)) {
				return (i === 0 ? "" : strs[0].substr(0, i));
			}

			if (strs[j].length === i) {
				return strs[j];
			}
		}
	}

	return strs[0];
};