/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	var result = true,
		i, j,
		temp = [];

	for (i = 0; i < 9; i++) {
		temp = [];
		for (j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				temp.push(Number(board[i][j]));
			}
		}
		result = valid(temp);
		if (!result)
			return result;
	}

	for (i = 0; i < 9; i++) {
		temp = [];
		for (j = 0; j < 9; j++) {
			if (board[j][i] !== '.') {
				temp.push(Number(board[j][i]));
			}
			result = valid(temp);
		}
		if (!result)
			return result;
	}

	for (i = 0; i <= 6; i += 3) {
		for (j = 0; j <= 6; j += 3) {
			temp = [];
			for (var _i = i; _i < i + 3; _i++)
				for (var _j = j; _j < j + 3; _j++)
					if (board[_i][_j] !== '.') {
						temp.push(Number(board[_i][_j]));
					}
			result = valid(temp);
			if (!result)
				return result;
		}
	}
	return result
};

function valid(array) {
	var hash = [],
		len = array.length,
		i;
	for (i = 0; i < len; i++) {
		if (hash[array[i]]) return false;
		hash[array[i]] = true;
	}
	return true;
}