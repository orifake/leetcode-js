/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
	while (num > 9) {
		sum = 0
		while (num) {
			sum += num % 10
			num = ~~(num / 10)
		}
		num = sum
	}
	return num
};

/**
 *  Time: O(1)
 *  Space: O(1)
 */

const addDigits2 = function (num) {
	return 1 + (num - 1) % 9;
};