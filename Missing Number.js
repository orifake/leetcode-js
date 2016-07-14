/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	var max = Math.max.apply(null, nums);
	var min = Math.min.apply(null, nums);

	if (min !== 0) return 0;
	return ((max * (max + 1) / 2) - nums.reduce(function(prev, next) {
		return prev + next;
	})) || max + 1
};