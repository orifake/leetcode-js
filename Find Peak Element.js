/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
	var len = nums.length,
		start = 0,
		end = len - 1,
		mid = 0;

	if (nums.length === 0) {
		return 0
	}

	while (start < end) {

		mid = parseInt((start + end) / 2);

		if (nums[mid] <= nums[mid + 1]) {
			start = mid + 1;
		} else if (nums[mid] <= nums[mid - 1]) {
			end = mid - 1;
		} else {
			return mid;
		}
	}

	return start
};