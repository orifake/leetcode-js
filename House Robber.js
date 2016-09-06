/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	var length = nums.length;
	var result = [];

	if (length === 0) {
		return 0;
	}

	if (length === 1) {
		return nums[0];
	}

	result[0] = nums[0];
	result[1] = Math.max(nums[1], nums[0]);
	for (var i = 2; i < length; i++) {
		result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
	}
	return result[length - 1];
};