/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
	if (num === 0) {
		return false;
	}
	var loop = [2, 3, 5];
	for (var i = 0; i < 3; i++) {
		while (num % loop[i] === 0) {
			num = num / loop[i];
		}
	}
	return num === 1 ? true : false;
};