/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	var map = {};
	for (var i = 0, len1 = ransomNote.length; i < len1; i++) {
		var item = ransomNote[i];
		for (var j = 0, len2 = magazine.length; j < len2; j++) {
			if (map[j] || magazine[j] !== item) {
				continue;
			}
			map[j] = true;
			break;
		}
		if (j === len2) {
			return false;
		}
	}
	return true;
};