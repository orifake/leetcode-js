/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let left = 0
	let right = 1
	let result = 0
	while (right < prices.length) {
		if (prices[left] < prices[right]) {
			result = Math.max(result, prices[right] - prices[left])
		} else {
			left = right
		}
		console.log(left, right, result)
		right++
	}
	return result
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))