/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	let p = removeElement(nums, 0)
	for (; p < nums.length; p++) {
		nums[p] = 0;
	}
};

const removeElement = function (nums, val) {
	let fast = 0
	let slow = 0
	while (fast < nums.length) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast]
			slow++
		}
		fast++
	}
	return slow
}