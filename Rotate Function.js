/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
	var result;
	var temp = 0;
	var sum = 0;
	var len = A.length;

	A.forEach(function(item, index) {
		temp += index * item;
		sum += item;
	});

	result = temp;

	while (A.length) {
		temp = temp + sum - A.pop() * len;
		result = Math.max(result, temp);
	}
	return result;
};