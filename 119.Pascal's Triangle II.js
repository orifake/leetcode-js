/**
 *  Time: O(n^2)
 *  Space: O(1)
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
	let result = [1];
	for (let i = 1; i < rowIndex + 1; i++) {
		for (let j = i - 1; j > 0; j--) {
			result[j] += result[j - 1]
		}
		result.push(1)
	}
	return result
};

console.log(getRow(4))