/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
	const lookup = {};

	for (let i = 0; i < nums.length; i++) {
		if (lookup.hasOwnProperty(nums[i])) {
			if (i - lookup[nums[i]] <= k) {
				return true;
			}
			lookup[nums[i]] = i;
		} else {
			lookup[nums[i]] = i;
		}
	}

	return false;
};