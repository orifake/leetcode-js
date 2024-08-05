/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
	let start = 0
	let end = nums.length - 1

	while (start < end) {
		let mid = parseInt((start + end) / 2)
		if (nums[mid] < nums[end]) {
			end = mid
		} else if (nums[mid] > nums[end]) {
			start = mid + 1
		} else {
			return nums[start]
		}
	}

	return nums[start]
};