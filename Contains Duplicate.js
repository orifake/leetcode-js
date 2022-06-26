/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
	const lookup = {};
	if (nums.length === 0) {
		return false;
	}
	for (let i = 0; i < nums.length; i++) {
		if (lookup.hasOwnProperty(nums[i])) {
			return true;
		}
		lookup[nums[i]] = i;
	}
	return false;
};