/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
	let count = 0
	let candidate = null
	let len = nums.length
	for (let i = 0; i < len; i++) {
		if (count === 0) {
			candidate = nums[i]
		}
		count += ((candidate === nums[i]) ? 1 : -1)
	}
	return candidate
};

console.log(majorityElement([6, 5, 5]))