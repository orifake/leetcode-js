/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	var patternArray = pattern.split('');
	var strArray = str.split(' ');
	if (patternArray.length !== strArray.length) {
		return false;
	}
	var mapPattern = {};
	var mapStr = {};
	for (var i = 0; i < patternArray.length; i++) {
		if (!mapPattern[patternArray[i]]) {
			mapPattern[patternArray[i]] = strArray[i];
		} else if (mapPattern[patternArray[i]] !== strArray[i]) {
			return false;
		}
		if (!mapStr[strArray[i]]) {
			mapStr[strArray[i]] = patternArray[i];
		} else if (mapStr[strArray[i]] !== patternArray[i]) {
			return false;
		}
	}
	return true;
};