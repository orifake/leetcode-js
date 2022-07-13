/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
	if (!nums || !nums.length) return 0
	let start = 0
	let end = nums.length - 1

	while (start < end) {
		let mid = parseInt((start + end) / 2);
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