/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
	let result = 0;
	while (n) {
		result += Math.floor(n / 5);
		n = Math.floor(n / 5);
	}
	return result;
};