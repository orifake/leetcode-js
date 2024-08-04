/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
	const array = s.split('').reverse();
	return array.reduce(function (prev, str, index) {
		return prev + Math.pow(26, index) * (array[index].charCodeAt(0) - 64);
	}, 0);
};