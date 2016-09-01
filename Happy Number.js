/**
 * @param {number} n
 * @return {boolean}
 */

var cal = function(n) {
	var result = 0;
	while (n) {
		result = result + (n % 10) * (n % 10);
		n = ~~(n / 10);
	}
	return result;
};

var isHappy = function(n) {
	var map = {};
	while (n) {
		if (n === 1) {
			return true;
		} else if (map[n]) {
			return false;
		}
		map[n] = true;
		n = cal(n);
	}
};