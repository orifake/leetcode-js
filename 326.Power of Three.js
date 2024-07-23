/**
 *  Time: O(log3(n))
 *  Space: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */


const isPowerOfThree = function (n) {
	if (n === 0) {
		return false
	}
	if (n === 1) {
		return true
	}
	if (n % 3 === 0) {
		return isPowerOfThree(n / 3)
	}

	return false
};