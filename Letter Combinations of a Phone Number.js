/**
 * @param {string} digits
 * @return {string[]}
 */

var map = {
	1: ['', ''],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
};


var letterCombinations = function(digits) {
	return combine([], digits);
};

function combine(array, digits) {
	if (!digits.length) return array;

	var num = digits[0]; // first char
	var temp = array.length ? [] : map[num];

	array.forEach(function(k) {
		map[num].forEach(function(v) {
			temp.push(k + v);
		});
	});

	return combine(temp, digits.substring(1))
}