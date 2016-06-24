/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var i;
	var len = nums.length;
	var result = nums[0];
	if (len === 1) {
		return result;
	}
	for (i = 1; i < len; i++) {
		result = result ^ nums[i]
	}
	return result;
};