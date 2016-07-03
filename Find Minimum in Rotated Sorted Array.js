/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
	var len = nums.length,
		start = 0,
		end = len - 1,
		mid;

	while (start < end) {
		mid = parseInt((start + end) / 2);
		if (nums[mid] < nums[end]) {
			end = mid;
		} else if (nums[mid] > nums[end]) {
			start = mid + 1;
		} else {
			return nums[start];
		}
	}

	return nums[start];
};