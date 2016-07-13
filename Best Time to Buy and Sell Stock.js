/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices === null || prices.length === 0) {
		return 0;
	}

	var max = 0,
		diff = 0,
		min = Infinity;

	for (var i = 0; i < prices.length; i++) {
		var price = prices[i];
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