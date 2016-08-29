/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var result = numRows > 0 ? [
		[1]
	] : [];
	for (var i = 1; i < numRows; i++) {
		result[i] = [];
		for (var j = 0; j <= i; j++) {
			if (j === 0) {
				result[i][j] = 1
			} else if (j === i) {
				result[i][j] = 1
			} else {
				result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
			}
		}
	}
	return result;
};