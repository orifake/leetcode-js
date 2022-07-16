/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
	let last = 0
	let now = 0
	for (num of nums) {
		[last, now] = [now, Math.max(last + num, now)]
	}
	return now
};

console.log(rob([2, 7, 9, 3, 1]))