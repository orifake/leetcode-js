/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	var result = [
		[1]
	];
	for (var i = 1; i < rowIndex + 1; i++) {
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
	return result[rowIndex];
};