/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	if (num < 10) {
		return num;
	}
	var array = (num + '').split('');
	return addDigits(array.reduce(function(prev, curr) {
		return prev * 1 + curr * 1;
	}, 0));
};