/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var rusult = digits.concat(),
		add = 0,
		len = digits.length;

	digits[len - 1]++;

	for (var i = len - 1; i >= 0; i--) {
		var sum = digits[i] + add;
		rusult[i] = sum % 10;
		add = ~~(sum / 10);
		if (!add) {
			break;
		}

	}

	if (add)
		rusult.unshift(add);

	return rusult;
};