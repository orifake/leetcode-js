/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
	var result = 0;
	while (n) {
		result += Math.floor(n / 5);
		n = Math.floor(n / 5);
	}
	return result;
};