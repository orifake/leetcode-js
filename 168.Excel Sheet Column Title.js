/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
	let result = '';
	while (n) {
		result = String.fromCharCode((n - 1) % 26 + 65) + result;
		n = parseInt((n - 1) / 26);
	}
	return result;
};