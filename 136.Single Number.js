/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
	let result = nums[0];
	for (let i = 1; i < nums.length; i++) {
		result = result ^ nums[i]
	}
	return result;
};