/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	var hash = new Array(n),
		a = Math.sqrt(n);

	for (var i = 2; i <= a; i++) {
		if (!hash[i]) {
			for (var j = i * i; j < n; j += i)
				hash[j] = true;
		}
	}

	var result = 0;
	for (var i = 2; i < n; i++) {
		if (!hash[i]) result++;
	}

	return result
};