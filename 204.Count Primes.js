/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
	let hash = new Array(n)
	let a = Math.sqrt(n)

	for (let i = 2; i <= a; i++) {
		if (!hash[i]) {
			for (let j = i * i; j < n; j += i)
				hash[j] = true
		}
	}

	let result = 0;
	for (let i = 2; i < n; i++) {
		if (!hash[i]) result++
	}

	return result
};