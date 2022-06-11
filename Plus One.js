/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0
		} else {
			digits[i] = digits[i] + 1;
			return digits
		}
	}
	digits[0] = 1
	digits.push(0)
	return digits
};

console.log(plusOne([9, 9, 9]))