/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	if (prices === null || prices.length === 0) {
		return 0;
	}

	let max = 0;
	let diff = 0;
	let min = Infinity;

	for (let i = 0; i < prices.length; i++) {
		let price = prices[i];
		if (min > price) {
			min = price;
		}

		diff = price - min;

		if (max < diff) {
			max = diff;
		}
	}

	return max;
};