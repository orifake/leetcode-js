/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
	var verArray1 = version1.split('.');
	var verArray2 = version2.split('.');
	var len1 = verArray1.length,
		len2 = verArray2.length;
	var len = Math.max(len1, len2);
	for (var i = 0; i < len; i++) {
		var item1 = i < len1 ? +verArray1[i] : 0;
		var item2 = i < len2 ? +verArray2[i] : 0;

		if (item1 > item2) {
			return 1;
		}

		if (item1 < item2) {
			return -1;
		}

		if ((item1 * 1 === item2 * 1) && i === len - 1) {
			return 0;
		}
	}
};