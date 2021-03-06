/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	var map = {};
	var len = nums.length;
	for (var i = 0; i < len; i++) {
		if (!map[nums[i]]) {
			map[nums[i]] = 1;
		} else {
			map[nums[i]]++;
		}

		if (map[nums[i]] > len / 2) {
			return nums[i];
		}
	}
};