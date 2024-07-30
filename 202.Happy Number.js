/**
 * @param {number} n
 * @return {boolean}
 */

const cal = function (n) {
	let result = 0
	while (n) {
		result = result + (n % 10) * (n % 10)
		n = parseInt(n / 10)
	}
	return result;
};

const isHappy = function (n) {
	let map = {};
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