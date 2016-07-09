/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	var vowelString = "aeiouAEIOU",
		vowelArr = [],
		sourceArr = s.split(""),
		len = sourceArr.length,
		vowelArrLen,
		i;

	for (i = 0; i < len; i++) {
		if (vowelString.indexOf(sourceArr[i]) !== -1) {
			vowelArr.push(sourceArr[i]);
		}
	}

	vowelArrLen = vowelArr.length - 1;

	for (i = 0; i < len; i++) {
		if (vowelString.indexOf(sourceArr[i]) !== -1) {
			sourceArr[i] = vowelArr[vowelArrLen--];
		}
	}

	return sourceArr.join("");
};