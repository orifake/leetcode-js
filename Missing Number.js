/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
	const expected_sum = ~~(nums.length * (nums.length + 1) / 2)
	const actual_sum = nums.reduce((partialSum, a) => partialSum + a, 0)
	return expected_sum - actual_sum
};