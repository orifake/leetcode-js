/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
	if (nums.length == 1) return nums[0]
	if (nums.length == 2) return Math.max(nums[0], nums[1])

	nums[1] = Math.max(nums[0], nums[1])
	for (let i = 2; i < nums.length; i++) {
		nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1])
	}

	return nums[nums.length - 1]
};

console.log(rob([2, 7, 9, 3, 1]))