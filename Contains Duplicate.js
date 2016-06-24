/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var i;
	var len = nums.length;
	var map = {};
	if (len === 0) {
		return false;
	}
	for (i = 0; i < len; i++) {
		if (map.hasOwnProperty(nums[i])) {
			return true;
		}
		map[nums[i]] = i;
	}
	return false;
};